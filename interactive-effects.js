// Interactive Effects System
class InteractiveEffects {
  constructor() {
    this.cursor = null
    this.fallingObjects = []
    this.mousePosition = { x: 0, y: 0 }
    this.lastMousePosition = { x: 0, y: 0 }
    this.isMouseMoving = false
    
    // 图片数组 - 从随机掉落图文件夹中选择
    this.images = [
      "随机掉落图/画板 34.webp",
      "随机掉落图/画板 37.webp",
      "随机掉落图/画板 38.webp",
      "随机掉落图/画板 39.webp",
      "随机掉落图/画板 40.webp",
      "随机掉落图/画板 41.webp",
      "随机掉落图/画板 42.webp",
      "随机掉落图/画板 43.webp",
      "随机掉落图/画板 44.webp",
      "随机掉落图/画板 45.webp",
      "随机掉落图/画板 46.webp",
      "随机掉落图/画板 47.webp",
      "随机掉落图/画板 48.webp",
      "随机掉落图/画板 49.webp",
      "随机掉落图/画板 50.webp",
      "随机掉落图/画板 51.webp",
      "随机掉落图/画板 52.webp",
      "随机掉落图/画板 53.webp",
      "随机掉落图/画板 54.webp",
      "随机掉落图/画板 55.webp",
      "随机掉落图/画板 56.webp",
      "随机掉落图/画板 57.webp",
      "随机掉落图/画板 58.webp",
      "随机掉落图/画板 59.webp",
      "随机掉落图/画板 60.webp",
      "随机掉落图/画板 61.webp",
      "随机掉落图/画板 62.webp",
      "随机掉落图/画板 63.webp",
      "随机掉落图/画板 64.webp",
      "随机掉落图/画板 65.webp",
      "随机掉落图/画板 66.webp",
      "随机掉落图/画板 67.webp",
      "随机掉落图/画板 68.webp",
      "随机掉落图/画板 69.webp",
      "随机掉落图/画板 70.webp",
      "随机掉落图/画板 71.webp",
      "随机掉落图/画板 72.webp",
      "随机掉落图/画板 73.webp",
      "随机掉落图/画板 74.webp",
      "随机掉落图/画板 75.webp",
      "随机掉落图/画板 76.webp",
      "随机掉落图/画板 77.webp",
      "随机掉落图/画板 78.webp",
      "随机掉落图/画板 79.webp",
      "随机掉落图/画板 80.webp",
      "随机掉落图/画板 81.webp",
      "随机掉落图/画板 82.webp",
      "随机掉落图/画板 83.webp",
      "随机掉落图/画板 84.webp",
      "随机掉落图/画板 85.webp",
      "随机掉落图/画板 86.webp",
      "随机掉落图/画板 87.webp",
      "随机掉落图/画板 88.webp",
      "随机掉落图/画板 89.webp"
    ]
    
    // 陀螺仪相关属性
    this.gamma = 0
    this.tiltEnabled = false
    this.tiltSensitivity = 0.5 // 倾斜敏感度
    
    this.objects = [
      "⚈",
      "⚉",
      "⚆",
      "☻",
      "♘",
      "☺︎",
      "⚽︎",
      "🎲",
      "⚽︎",
      "☂︎",
      "♠︎",
      "♔",
      "⚇",
      "⚾︎",
      "☯︎",
      "🌟",
      "⭐",
      "🔮",
      "💎",
      "🎯",
      "🎪",
      "🎨",
      "🎭",
      "🎪",
      "🎡",
      "🎢",
      "🎠",
      "🎊",
      "🎉",
      "🎈",
      "🎁",
      "🎀",
      "🌈",
      "☀️",
      "🌙",
      "⭐",
      "💫",
      "✨",
      "🔥",
      "💧",
      "🌸",
      "🌺",
      "🌻",
      "🌷",
    ]
    this.pathbotIcons = ["🤖", "🂢", "🃇", "🂱", "🀖", "🀥", "🀧", "🀤", "🀚", "⚆", "🀅", "🀐", "🃚", "🀙", "⚇", "🁸", "🃃", "🁢"]
    this.pathbotColors = [
      "#ffffff",
      "#ff6b6b",
      "#4ecdc4",
      "#45b7d1",
      "#f9ca24",
      "#f0932b",
      "#eb4d4b",
      "#6c5ce7",
      "#a29bfe",
      "#fd79a8",
      "#fdcb6e",
      "#e17055",
      "#00b894",
      "#00cec9",
      "#0984e3",
      "#74b9ff",
      "#e84393",
      "#fd79a8",
    ]
    this.stackedObjects = [] // Objects that have settled at the bottom
    this.groundLevel = window.innerHeight - 60 // Ground level for stacking

    this.init()
  }

  init() {
    this.createCustomCursor()
    this.setupEventListeners()
    this.initBounceText()
    this.startFallingObjects()
    this.initPathbotCustomization()
    this.initDeviceOrientation() // 添加陀螺仪初始化
  }

  createCustomCursor() {
    this.cursor = document.createElement("div")
    this.cursor.className = "custom-cursor"
    document.body.appendChild(this.cursor)
  }

  setupEventListeners() {
    // Mouse movement
    document.addEventListener("mousemove", (e) => {
      this.lastMousePosition = { ...this.mousePosition }
      this.mousePosition = { x: e.clientX, y: e.clientY }
      this.isMouseMoving = true

      if (this.cursor) {
        this.cursor.style.left = e.clientX + "px"
        this.cursor.style.top = e.clientY + "px"
      }

      this.checkCollisions()
      this.createMouseTrail()

      clearTimeout(this.mouseStopTimeout)
      this.mouseStopTimeout = setTimeout(() => {
        this.isMouseMoving = false
      }, 100)
    })

    // Mouse click effects
    document.addEventListener("mousedown", () => {
      if (this.cursor) {
        this.cursor.classList.add("clicking")
      }
    })

    document.addEventListener("mouseup", () => {
      if (this.cursor) {
        this.cursor.classList.remove("clicking")
      }
    })

    // Prevent context menu
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault()
    })

    window.addEventListener("resize", () => {
      this.groundLevel = window.innerHeight - 60
    })
  }

  createMouseTrail() {
    if (!this.isMouseMoving) return

    const trail = document.createElement("div")
    trail.className = "mouse-trail"
    trail.style.left = this.mousePosition.x + "px"
    trail.style.top = this.mousePosition.y + "px"
    document.body.appendChild(trail)

    setTimeout(() => {
      document.body.removeChild(trail)
    }, 800)
  }

  initBounceText() {
    const textElements = document.querySelectorAll("h1, h2, h3, h4, p, a, span, button")

    textElements.forEach((element) => {
      if (
        element.closest(".pathbot-header") ||
        element.closest("#pathbot-messages") ||
        element.closest(".custom-cursor") ||
        element.classList.contains("bounce-text")
      ) {
        return
      }

      const text = element.textContent
      if (text.trim().length === 0) return

      element.classList.add("bounce-text")
      element.innerHTML = text
        .split("")
        .map((char) => {
          if (char === " ") return " "
          return `<span class="bounce-letter">${char}</span>`
        })
        .join("")
    })
  }

  startFallingObjects() {
    // More frequent spawning
    setInterval(
      () => {
        this.createFallingObject()
      },
      800 + Math.random() * 1200,
    ) // Reduced interval for more objects

    // Create more initial objects
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        this.createFallingObject()
      }, i * 300)
    }
  }

  createFallingObject() {
    const object = document.createElement("img")
    object.className = "falling-object"
    
    // 随机选择一张图片
    const randomImage = this.images[Math.floor(Math.random() * this.images.length)]
    object.src = randomImage
    object.alt = "falling object"

    const startX = Math.random() * (window.innerWidth - 150) + 75
    object.style.left = startX + "px"
    object.style.top = "-150px"

    // 设置图片大小为150px左右
    const size = 120 + Math.random() * 60 // Size between 120-180px
    object.style.width = size + "px"
    object.style.height = size + "px"
    object.style.objectFit = "cover"

    const velocity = {
      x: (Math.random() - 0.5) * 1.5,
      y: 1.5 + Math.random() * 2,
    }

    const objectData = {
      element: object,
      x: startX,
      y: -150,
      velocity: velocity,
      size: size,
      settled: false,
      rotation: 0,
      rotationSpeed: (Math.random() - 0.5) * 5,
    }

    this.fallingObjects.push(objectData)
    document.body.appendChild(object)

    this.animateFallingObject(objectData)
  }

  animateFallingObject(objectData) {
    const animate = () => {
      if (objectData.settled) return

      objectData.x += objectData.velocity.x
      objectData.y += objectData.velocity.y
      objectData.rotation += objectData.rotationSpeed

      objectData.element.style.left = objectData.x + "px"
      objectData.element.style.top = objectData.y + "px"
      objectData.element.style.transform = `rotate(${objectData.rotation}deg)`

      // Bounce off walls
      if (objectData.x <= 0 || objectData.x >= window.innerWidth - objectData.size) {
        objectData.velocity.x *= -0.7
        objectData.x = Math.max(0, Math.min(window.innerWidth - objectData.size, objectData.x))
      }

      // Check for ground collision or stacking
      const groundY = this.getGroundLevel(objectData.x, objectData.size)

      if (objectData.y >= groundY) {
        objectData.y = groundY
        objectData.velocity.y = 0
        objectData.velocity.x *= 0.8 // Friction
        objectData.rotationSpeed *= 0.9

        // Settle the object
        if (Math.abs(objectData.velocity.x) < 0.1) {
          objectData.settled = true
          objectData.velocity.x = 0
          this.stackedObjects.push(objectData)

          // Limit stacked objects to prevent performance issues
          if (this.stackedObjects.length > 50) {
            const oldObject = this.stackedObjects.shift()
            this.removeFallingObject(oldObject)
          }
          return
        }
      }

      // Check collision with other objects
      this.checkObjectCollisions(objectData)

      requestAnimationFrame(animate)
    }

    animate()
  }

  checkCollisions() {
    this.fallingObjects.forEach((objectData) => {
      const distance = Math.sqrt(
        Math.pow(objectData.x - this.mousePosition.x, 2) + Math.pow(objectData.y - this.mousePosition.y, 2),
      )

      if (distance < 30) {
        this.handleCollision(objectData)
      }
    })
  }

  handleCollision(objectData) {
    // Create collision effect
    const effect = document.createElement("div")
    effect.className = "collision-effect"
    effect.style.left = objectData.x + "px"
    effect.style.top = objectData.y + "px"
    document.body.appendChild(effect)

    setTimeout(() => {
      document.body.removeChild(effect)
    }, 500)

    // Bounce object away from cursor
    const dx = objectData.x - this.mousePosition.x
    const dy = objectData.y - this.mousePosition.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 0) {
      objectData.velocity.x = (dx / distance) * 8
      objectData.velocity.y = (dy / distance) * 8
    }

    objectData.element.classList.add("bouncing")
    setTimeout(() => {
      objectData.element.classList.remove("bouncing")
    }, 300)
  }

  removeFallingObject(objectData) {
    const index = this.fallingObjects.indexOf(objectData)
    if (index > -1) {
      this.fallingObjects.splice(index, 1)
      if (objectData.element.parentNode) {
        objectData.element.parentNode.removeChild(objectData.element)
      }
    }
  }

  initPathbotCustomization() {
    // Add customization panel
    const panel = document.createElement("div")
    panel.className = "pathbot-customization"
    panel.innerHTML = `
      <div class="customization-header">
        <h3>Customize PathBot</h3>
        <button class="customization-close" onclick="closePathbotCustomization()">×</button>
      </div>
      <div class="icon-section">
        <h4>Choose Icon</h4>
        <div class="icon-grid">
          ${this.pathbotIcons.map((icon) => `<div class="icon-option" data-icon="${icon}">${icon}</div>`).join("")}
        </div>
      </div>
      <div class="color-options">
        <h4>Choose Color</h4>
        <div class="color-grid">
          ${this.pathbotColors
            .map((color) => `<div class="color-option" data-color="${color}" style="background-color: ${color}"></div>`)
            .join("")}
        </div>
      </div>
    `

    document.body.appendChild(panel)

    // Add a visible customization button
    const customizeBtn = document.createElement("button")
    customizeBtn.className = "pathbot-customize-btn"
    customizeBtn.innerHTML = "🎨"
    customizeBtn.title = "Customize PathBot"
    customizeBtn.style.cssText = `
      position: fixed;
      bottom: 90px;
      right: ${window.innerWidth <= 768 ? "var(--spacing-md)" : "var(--spacing-lg)"};
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--color-surface);
      color: var(--color-text-primary);
      border: 1px solid var(--color-border);
      cursor: pointer;
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    `

    customizeBtn.addEventListener("click", () => {
      panel.classList.add("active")
    })

    customizeBtn.addEventListener("mouseenter", () => {
      customizeBtn.style.transform = "scale(1.1)"
      customizeBtn.style.background = "var(--color-surface-elevated)"
    })

    customizeBtn.addEventListener("mouseleave", () => {
      customizeBtn.style.transform = "scale(1)"
      customizeBtn.style.background = "var(--color-surface)"
    })

    document.body.appendChild(customizeBtn)

    // Setup customization events
    this.setupPathbotCustomization(panel)

    // Add right-click to PathBot for customization
    const pathbotFab = document.getElementById("pathbot-fab")
    if (pathbotFab) {
      pathbotFab.classList.add("customizable")
      pathbotFab.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        panel.classList.add("active")
      })
    }
  }

  setupPathbotCustomization(panel) {
    const iconOptions = panel.querySelectorAll(".icon-option")
    const colorOptions = panel.querySelectorAll(".color-option")
    const pathbotFab = document.getElementById("pathbot-fab")

    // Load saved customization
    const savedIcon = localStorage.getItem("pathbot-icon") || "🤖"
    const savedColor = localStorage.getItem("pathbot-color") || "#ffffff"

    if (pathbotFab) {
      pathbotFab.textContent = savedIcon
      pathbotFab.style.background = savedColor
    }

    // Mark current selections
    iconOptions.forEach((option) => {
      if (option.dataset.icon === savedIcon) {
        option.classList.add("selected")
      }
      option.addEventListener("click", () => {
        iconOptions.forEach((opt) => opt.classList.remove("selected"))
        option.classList.add("selected")

        const newIcon = option.dataset.icon
        if (pathbotFab) {
          pathbotFab.textContent = newIcon
        }
        localStorage.setItem("pathbot-icon", newIcon)
      })
    })

    colorOptions.forEach((option) => {
      if (option.dataset.color === savedColor) {
        option.classList.add("selected")
      }
      option.addEventListener("click", () => {
        colorOptions.forEach((opt) => opt.classList.remove("selected"))
        option.classList.add("selected")

        const newColor = option.dataset.color
        if (pathbotFab) {
          pathbotFab.style.background = newColor
        }
        localStorage.setItem("pathbot-color", newColor)
      })
    })
  }

  getGroundLevel(x, size) {
    let groundY = this.groundLevel

    // Check for objects to stack on
    for (const stackedObj of this.stackedObjects) {
      const distance = Math.abs(stackedObj.x - x)
      if (distance < (stackedObj.size + size) / 2) {
        const potentialY = stackedObj.y - size
        if (potentialY < groundY) {
          groundY = potentialY
        }
      }
    }

    return groundY
  }

  checkObjectCollisions(objectData) {
    for (const other of this.fallingObjects) {
      if (other === objectData || other.settled) continue

      const dx = objectData.x - other.x
      const dy = objectData.y - other.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const minDistance = (objectData.size + other.size) / 3

      if (distance < minDistance && distance > 0) {
        // Simple collision response
        const overlap = minDistance - distance
        const separationX = (dx / distance) * overlap * 0.5
        const separationY = (dy / distance) * overlap * 0.5

        objectData.x += separationX
        objectData.y += separationY
        other.x -= separationX
        other.y -= separationY

        // Exchange some velocity
        const tempVx = objectData.velocity.x
        const tempVy = objectData.velocity.y
        objectData.velocity.x = other.velocity.x * 0.8
        objectData.velocity.y = other.velocity.y * 0.8
        other.velocity.x = tempVx * 0.8
        other.velocity.y = tempVy * 0.8
      }
    }
  }

  clearStackedObjects() {
    this.stackedObjects.forEach((obj) => {
      if (obj.element.parentNode) {
        obj.element.parentNode.removeChild(obj.element)
      }
    })
    this.stackedObjects = []
  }

  // 初始化设备方向监听
  initDeviceOrientation() {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      // iOS 需要请求权限
      console.log('iOS设备，需要请求陀螺仪权限')
      this.requestOrientationPermission()
    } else {
      // 其他设备直接监听
      console.log('非iOS设备，直接监听陀螺仪')
      this.enableDeviceOrientation()
    }
  }

  // 请求iOS陀螺仪权限
  requestOrientationPermission() {
    const permissionButton = document.createElement('button')
    permissionButton.textContent = '允许陀螺仪权限'
    permissionButton.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
      background: #007AFF;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      z-index: 10000;
      cursor: pointer;
    `
    
    permissionButton.addEventListener('click', () => {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            console.log('陀螺仪权限已授予')
            this.enableDeviceOrientation()
            document.body.removeChild(permissionButton)
          } else {
            console.log('陀螺仪权限被拒绝')
            permissionButton.textContent = '权限被拒绝，点击重试'
          }
        })
        .catch(error => {
          console.error('请求陀螺仪权限失败:', error)
          permissionButton.textContent = '权限请求失败，点击重试'
        })
    })
    
    document.body.appendChild(permissionButton)
  }

  // 启用设备方向监听
  enableDeviceOrientation() {
    this.tiltEnabled = true
    window.addEventListener('deviceorientation', this.handleTilt.bind(this))
    console.log('陀螺仪监听已启用')
  }

  // 处理倾斜事件
  handleTilt(event) {
    if (!this.tiltEnabled) return
    
    this.gamma = event.gamma // 左右倾斜角度 (-90 到 90)
    
    // 根据倾斜角度给所有掉落对象添加横向偏移
    this.applyTiltToObjects()
  }

  // 将倾斜效果应用到所有对象
  applyTiltToObjects() {
    const tiltForce = this.gamma * this.tiltSensitivity * 0.1 // 转换为较小的力
    
    // 应用到正在掉落的对象
    this.fallingObjects.forEach(objectData => {
      if (!objectData.settled) {
        objectData.velocity.x += tiltForce
      }
    })
    
    // 应用到已堆叠的对象
    this.stackedObjects.forEach(objectData => {
      if (objectData.settled) {
        // 给已堆叠的对象也添加轻微的移动
        objectData.x += tiltForce * 0.5
        objectData.element.style.left = objectData.x + "px"
        
        // 确保对象不会移出屏幕
        if (objectData.x < 0) {
          objectData.x = 0
          objectData.element.style.left = "0px"
        } else if (objectData.x > window.innerWidth - objectData.size) {
          objectData.x = window.innerWidth - objectData.size
          objectData.element.style.left = (window.innerWidth - objectData.size) + "px"
        }
      }
    })
  }
}

// Global functions for customization
function closePathbotCustomization() {
  const panel = document.querySelector(".pathbot-customization")
  if (panel) {
    panel.classList.remove("active")
  }
}

// Initialize interactive effects when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Wait a bit to ensure all other scripts are loaded
  setTimeout(() => {
    window.interactiveEffects = new InteractiveEffects()
  }, 500)
})

// Close customization panel when clicking outside
document.addEventListener("click", (e) => {
  const panel = document.querySelector(".pathbot-customization")
  const pathbotFab = document.getElementById("pathbot-fab")

  if (panel && panel.classList.contains("active") && !panel.contains(e.target) && !pathbotFab.contains(e.target)) {
    panel.classList.remove("active")
  }
})
