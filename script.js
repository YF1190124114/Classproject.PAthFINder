// 页面导航功能
function showPage(pageId) {
    // 隐藏所有页面
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 更新进度指示器
    updateProgressIndicator(pageId);
    
    // 关闭移动端菜单
    closeMobileMenu();
    
    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 更新进度指示器
function updateProgressIndicator(currentPage) {
    const steps = document.querySelectorAll('.step');
    const pageOrder = ['self-awareness', 'values', 'future', 'interests', 'goals'];
    
    steps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        const stepPage = pageOrder[index];
        
        if (stepPage === currentPage) {
            step.classList.add('active');
        } else if (pageOrder.indexOf(currentPage) > index) {
            step.classList.add('completed');
        }
    });
}

// 移动端菜单切换
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// 浮动操作按钮
function toggleFabMenu() {
    const fabMenu = document.querySelector('.fab-menu');
    fabMenu.classList.toggle('active');
}

// 情绪日记功能
function openMoodDiary() {
    document.getElementById('mood-diary').style.display = 'block';
}

function closeMoodDiary() {
    document.getElementById('mood-diary').style.display = 'none';
}

// 情绪选择功能
document.addEventListener('DOMContentLoaded', function() {
    const moodOptions = document.querySelectorAll('.mood-option');
    
    moodOptions.forEach(option => {
        option.addEventListener('click', function() {
            // 移除其他选项的选中状态
            moodOptions.forEach(opt => opt.classList.remove('selected'));
            // 添加当前选项的选中状态
            this.classList.add('selected');
        });
    });
    
    // 移动端菜单事件
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // 进度指示器点击事件
    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-step');
            showPage(targetPage);
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('mood-diary');
        if (event.target === modal) {
            closeMoodDiary();
        }
    });
});

// 心理测试功能
function openPsychTests() {
    alert('心理测试功能正在开发中，敬请期待！');
}

// 关键词云功能
function openWordCloud() {
    alert('关键词云功能正在开发中，敬请期待！');
}

// 阶段总结功能
function openSummary() {
    alert('阶段总结功能正在开发中，敬请期待！');
}

// 价值观选择器
function openValueSelector() {
    alert('价值观选择器功能正在开发中，敬请期待！');
}

// 提问卡片
function openQuestionCards() {
    const questions = [
        "什么时候你感到最有成就感？",
        "如果金钱不是问题，你最想做什么？",
        "你最敬佩的人具有什么品质？",
        "什么样的活动让你忘记时间的流逝？",
        "你希望别人如何记住你？",
        "什么价值观对你来说是不可妥协的？",
        "你在什么情况下会感到内心平静？",
        "如果你有超能力，你会用它做什么？"
    ];
    
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    alert(`今日思考问题：\n\n${randomQuestion}\n\n请花几分钟时间认真思考这个问题。`);
}

// 价值印象笔记
function openValueNotes() {
    alert('价值印象笔记功能正在开发中，敬请期待！');
}

// AI辅助总结
function openAISummary() {
    alert('AI辅助总结功能正在开发中，敬请期待！');
}

// 人生画板
function openLifeCanvas() {
    alert('三种未来人生画板功能正在开发中，敬请期待！');
}

// 模拟人生构建器
function openLifeSimulator() {
    alert('模拟人生构建器功能正在开发中，敬请期待！');
}

// 校园资源地图
function openResourceMap() {
    alert('校园资源地图功能正在开发中，敬请期待！');
}

// 青年人物故事
function openStories() {
    const stories = [
        "李明：从迷茫大一到创业成功的转变之路",
        "张小雨：如何在大学四年找到自己的学术兴趣",
        "王浩：从内向到成为学生会主席的成长故事",
        "陈思：跨专业考研成功的经验分享",
        "刘佳：大学期间的志愿服务如何改变了她的人生观"
    ];
    
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    alert(`推荐阅读：\n\n${randomStory}\n\n这些真实的故事或许能给你一些启发。`);
}

// 14天兴趣挑战生成器
function openChallengeGenerator() {
    const challenges = [
        "艺术创作挑战：每天尝试一种新的艺术形式",
        "运动探索挑战：每天体验不同的运动项目",
        "阅读拓展挑战：每天阅读不同领域的文章",
        "技能学习挑战：每天学习一个新的实用技能",
        "社交挑战：每天主动与一个新朋友交流",
        "创意写作挑战：每天写一篇不同主题的短文",
        "音乐探索挑战：每天学习一种新的音乐风格",
        "科学实验挑战：每天做一个简单的科学实验"
    ];
    
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    alert(`为你生成的14天挑战：\n\n${randomChallenge}\n\n准备好开始这个有趣的探索之旅了吗？`);
}

// 每日行动打卡
function openDailyCheckin() {
    const today = new Date().toLocaleDateString('zh-CN');
    alert(`今日打卡 - ${today}\n\n请记录你今天完成的探索行动：\n\n1. 尝试了什么新事物？\n2. 有什么新的发现？\n3. 遇到了什么挑战？\n4. 明天想要尝试什么？`);
}

// 试错日志模板
function openTrialLog() {
    alert('试错日志模板功能正在开发中，敬请期待！');
}

// AI辅助复盘
function openAIReview() {
    alert('AI辅助复盘功能正在开发中，敬请期待！');
}

// SMART目标制定器
function openSMARTGoals() {
    alert('SMART目标制定器功能正在开发中，敬请期待！');
}

// 三角图生成器
function openTriangleChart() {
    alert('三角图生成器功能正在开发中，敬请期待！');
}

// 阶段性目标面板
function openGoalDashboard() {
    alert('阶段性目标面板功能正在开发中，敬请期待！');
}

// AI助手功能
function openAIAssistant() {
    const tips = [
        "建议：先完成自我觉察模块，了解当前状态",
        "提醒：定期回顾和调整你的目标",
        "建议：尝试记录每日的小进步",
        "提醒：不要害怕试错，这是成长的必经之路",
        "建议：寻找志同道合的朋友一起成长"
    ];
    
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert(`AI助手建议：\n\n${randomTip}\n\n需要更多帮助吗？可以随时咨询我！`);
}

// 帮助功能
function openHelp() {
    alert('Pass Finder 使用指南：\n\n1. 按顺序完成五个模块的探索\n2. 每个模块都有多个工具帮助你深入了解自己\n3. 记录你的想法和发现\n4. 定期回顾和总结\n5. 不要急于求成，给自己时间成长\n\n祝你探索愉快！');
}

// 设置功能
function openSettings() {
    alert('设置功能正在开发中，敬请期待！');
}

// 保存情绪日记
function saveMoodDiary() {
    const selectedMood = document.querySelector('.mood-option.selected');
    const diaryText = document.querySelector('#mood-diary textarea').value;
    
    if (!selectedMood) {
        alert('请选择今天的情绪状态');
        return;
    }
    
    if (!diaryText.trim()) {
        alert('请写下今天的感受');
        return;
    }
    
    // 这里可以添加保存到本地存储或发送到服务器的逻辑
    const today = new Date().toLocaleDateString('zh-CN');
    const moodData = {
        date: today,
        mood: selectedMood.getAttribute('data-mood'),
        content: diaryText
    };
    
    // 保存到本地存储
    let moodHistory = JSON.parse(localStorage.getItem('moodHistory') || '[]');
    moodHistory.push(moodData);
    localStorage.setItem('moodHistory', JSON.stringify(moodHistory));
    
    alert('情绪日记保存成功！');
    closeMoodDiary();
    
    // 清空表单
    document.querySelectorAll('.mood-option').forEach(opt => opt.classList.remove('selected'));
    document.querySelector('#mood-diary textarea').value = '';
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 为保存按钮添加事件监听器
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveMoodDiary);
    }
    
    // 初始化显示首页
    showPage('home');
    
    // 添加页面切换动画
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.transition = 'opacity 0.3s ease-in-out';
    });
});

// 平滑滚动功能
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

    // 键盘快捷键支持
    document.addEventListener('keydown', function(event) {
        // ESC键关闭模态框和PathBot聊天
        if (event.key === 'Escape') {
            closeMoodDiary();
            const fabMenu = document.querySelector('.fab-menu');
            if (fabMenu.classList.contains('active')) {
                toggleFabMenu();
            }
            // 关闭PathBot聊天窗口
            const pathbotChat = document.getElementById('pathbot-chat');
            if (pathbotChat && !pathbotChat.classList.contains('pathbot-hidden')) {
                // 调用关闭对话功能
                closeChat();
            }
        }
        
        // 数字键快速切换页面
        const pageMap = {
            '1': 'self-awareness',
            '2': 'values',
            '3': 'future',
            '4': 'interests',
            '5': 'goals'
        };
        
        if (pageMap[event.key]) {
            showPage(pageMap[event.key]);
        }
    });

// PathBot AI顾问功能
(function() {
    // 元素获取
    const fab = document.getElementById('pathbot-fab');
    const chat = document.getElementById('pathbot-chat');
    const closeBtn = document.getElementById('pathbot-close');
    const sendBtn = document.getElementById('pathbot-send');
    const input = document.getElementById('pathbot-input');
    const messages = document.getElementById('pathbot-messages');

    // 聊天历史本地存储key
    const HISTORY_KEY = 'pathbot_history';
    
    // 用于取消API请求的AbortController
    let currentRequest = null;
    
    // 拖拽相关变量
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;
    let fabStartX = 0;
    let fabStartY = 0;

    // 加载历史
    function loadHistory() {
        const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
        messages.innerHTML = '';
        history.forEach(msg => addMessage(msg.role, msg.content));
        messages.scrollTop = messages.scrollHeight;
    }

    // 保存历史
    function saveHistory(role, content) {
        let history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
        history.push({role, content});
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    }

    // 添加消息到界面
    function addMessage(role, content) {
        const div = document.createElement('div');
        div.className = role === 'user' ? 'pathbot-msg-user' : 'pathbot-msg-ai';
        div.innerHTML = `<span>${content.replace(/\n/g, '<br>')}</span>`;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    // 发送消息
    async function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        addMessage('user', text);
        saveHistory('user', text);
        input.value = '';
        addMessage('ai', '正在思考...');
        messages.scrollTop = messages.scrollHeight;

        // 获取用户模块数据（示例：可根据实际localStorage结构调整）
        const moodHistory = localStorage.getItem('moodHistory') || '[]';
        // 你可以继续添加其他模块数据

        // 构造API请求
        const apiKey = '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';
        const endpoint = 'https://api.openai.com/v1/chat/completions';
        const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
        // 只保留最近10条历史，防止token过多
        const recentHistory = history.slice(-10).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content
        }));

        // 系统提示词，包含个性化和数据
        const systemPrompt = `你是PathBot，一名大学新生发展顾问。你可以访问用户的情绪日记数据：${moodHistory}。请结合用户的历史对话和模块数据，给予成长建议、复盘引导和个性化反馈。`;

        // 创建AbortController用于取消请求
        if (currentRequest) {
            currentRequest.abort();
        }
        currentRequest = new AbortController();

        // 调用OpenAI API
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {role: 'system', content: systemPrompt},
                        ...recentHistory,
                        {role: 'user', content: text}
                    ]
                }),
                signal: currentRequest.signal
            });
            const data = await res.json();
            // 移除"正在思考..."消息
            messages.removeChild(messages.lastChild);
            if (data.choices && data.choices[0]) {
                const reply = data.choices[0].message.content;
                addMessage('ai', reply);
                saveHistory('ai', reply);
            } else {
                addMessage('ai', '抱歉，AI服务暂时不可用。');
            }
        } catch (e) {
            if (e.name === 'AbortError') {
                console.log('API请求已被取消');
                return;
            }
            messages.removeChild(messages.lastChild);
            addMessage('ai', '网络错误，请稍后再试。');
        } finally {
            currentRequest = null;
        }
    }

    // 事件绑定
    fab.onclick = () => {
        console.log('PathBot按钮被点击，显示聊天窗口');
        chat.classList.remove('pathbot-hidden');
        
        // 添加显示动画
        setTimeout(() => {
            chat.style.opacity = '1';
            chat.style.visibility = 'visible';
            chat.style.transform = 'translateY(0)';
        }, 10);
        
        // 检查是否是新对话（消息区域为空）
        if (messages.children.length === 0) {
            // 检查是否需要显示周提醒
            const last = localStorage.getItem('pathbot_last_remind');
            const now = Date.now();
            const weekInMs = 6.5 * 24 * 3600 * 1000;
            
            if (last && (now - Number(last)) > weekInMs) {
                // 显示周提醒
                addMessage('ai', '新的一周，记得进行成长复盘哦！你可以和我聊聊最近的收获与困惑。');
                localStorage.setItem('pathbot_last_remind', now);
            } else {
                // 显示普通欢迎消息
                addMessage('ai', '你好！我是PathBot，你的AI成长顾问。我可以帮助你进行自我探索、目标设定和成长复盘。有什么想聊的吗？');
            }
        } else {
            // 继续之前的对话，加载历史
            loadHistory();
        }
        setTimeout(() => input.focus(), 200);
    };
    
    // 关闭对话功能
    function closeChat() {
        console.log('关闭PathBot对话');
        
        // 添加隐藏动画
        chat.style.opacity = '0';
        chat.style.visibility = 'hidden';
        chat.style.transform = 'translateY(20px)';
        
        // 延迟添加隐藏类
        setTimeout(() => {
            chat.classList.add('pathbot-hidden');
            // 清空输入框
            input.value = '';
            // 清空消息区域，关闭对话
            messages.innerHTML = '';
            // 取消正在进行的API请求
            if (currentRequest) {
                currentRequest.abort();
                currentRequest = null;
            }
            // 可选：清空对话历史
            // localStorage.removeItem(HISTORY_KEY);
        }, 300);
    }

    // 退出聊天功能
    closeBtn.onclick = closeChat;
    
    // 拖拽功能实现
    function initDragAndDrop() {
        // 鼠标按下事件 - 在PathBot圆形按钮上
        fab.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            
            // 获取当前PathBot按钮位置
            const rect = fab.getBoundingClientRect();
            fabStartX = rect.left;
            fabStartY = rect.top;
            
            // 添加拖拽样式
            fab.style.cursor = 'grabbing';
            fab.style.userSelect = 'none';
            
            // 防止文本选择
            e.preventDefault();
        });
        
        // 鼠标移动事件
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - dragStartX;
            const deltaY = e.clientY - dragStartY;
            
            // 计算新位置
            const newX = fabStartX + deltaX;
            const newY = fabStartY + deltaY;
            
            // 边界检查，防止拖出屏幕
            const maxX = window.innerWidth - fab.offsetWidth;
            const maxY = window.innerHeight - fab.offsetHeight;
            
            const boundedX = Math.max(0, Math.min(newX, maxX));
            const boundedY = Math.max(0, Math.min(newY, maxY));
            
            // 应用新位置到PathBot按钮
            fab.style.left = boundedX + 'px';
            fab.style.top = boundedY + 'px';
            fab.style.right = 'auto';
            fab.style.bottom = 'auto';
            
            // 同时移动聊天窗口，保持相对位置固定
            // 聊天窗口在PathBot按钮上方170px，右侧30px
            const chatX = boundedX + 30 - chat.offsetWidth; // 右侧30px
            const chatY = boundedY - 170 - chat.offsetHeight; // 上方170px
            
            // 确保聊天窗口不超出屏幕边界
            const chatMaxX = window.innerWidth - chat.offsetWidth;
            const chatMaxY = window.innerHeight - chat.offsetHeight;
            
            const chatBoundedX = Math.max(0, Math.min(chatX, chatMaxX));
            const chatBoundedY = Math.max(0, Math.min(chatY, chatMaxY));
            
            chat.style.left = chatBoundedX + 'px';
            chat.style.top = chatBoundedY + 'px';
            chat.style.right = 'auto';
            chat.style.bottom = 'auto';
        });
        
        // 鼠标释放事件
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            
            isDragging = false;
            fab.style.cursor = 'grab';
            fab.style.userSelect = 'auto';
            
            // 保存PathBot按钮位置到本地存储
            const rect = fab.getBoundingClientRect();
            localStorage.setItem('pathbot_fab_position', JSON.stringify({
                x: rect.left,
                y: rect.top
            }));
        });
        
        // 双击PathBot按钮重置位置
        fab.addEventListener('dblclick', (e) => {
            // 重置PathBot按钮到默认位置
            fab.style.left = 'auto';
            fab.style.top = 'auto';
            fab.style.right = '30px';
            fab.style.bottom = '100px';
            
            // 重置聊天窗口到默认位置
            chat.style.left = 'auto';
            chat.style.top = 'auto';
            chat.style.right = '30px';
            chat.style.bottom = '170px';
            
            // 清除保存的位置
            localStorage.removeItem('pathbot_fab_position');
            
            console.log('PathBot位置已重置到默认位置');
        });
    }
    
    // 点击聊天窗口外部也可以退出
    document.addEventListener('click', (e) => {
        if (chat.classList.contains('pathbot-hidden')) return;
        if (!chat.contains(e.target) && !fab.contains(e.target)) {
            closeChat();
        }
    });
    
    sendBtn.onclick = sendMessage;
    input.onkeydown = e => { if (e.key === 'Enter') sendMessage(); };

    // 定时每周提醒（可选功能）
    function weeklyReminder() {
        const last = localStorage.getItem('pathbot_last_remind');
        const now = Date.now();
        if (!last || now - Number(last) > 6.5 * 24 * 3600 * 1000) { // 6.5天
            // 只在用户主动点击PathBot按钮时显示提醒，而不是自动弹出
            // 如果需要自动提醒，可以取消下面的注释
            /*
            setTimeout(() => {
                chat.classList.remove('pathbot-hidden');
                addMessage('ai', '新的一周，记得进行成长复盘哦！你可以和我聊聊最近的收获与困惑。');
                saveHistory('ai', '新的一周，记得进行成长复盘哦！你可以和我聊聊最近的收获与困惑。');
                localStorage.setItem('pathbot_last_remind', now);
            }, 2000);
            */
            // 只记录时间，不自动弹出
            localStorage.setItem('pathbot_last_remind', now);
        }
    }
    setTimeout(weeklyReminder, 3000);

    // 恢复PathBot按钮和聊天窗口位置
    function restorePathBotPosition() {
        const savedPosition = localStorage.getItem('pathbot_fab_position');
        if (savedPosition && fab && chat) {
            try {
                const position = JSON.parse(savedPosition);
                
                // 恢复PathBot按钮位置
                fab.style.left = position.x + 'px';
                fab.style.top = position.y + 'px';
                fab.style.right = 'auto';
                fab.style.bottom = 'auto';
                
                // 恢复聊天窗口位置（保持相对位置固定）
                const chatX = position.x + 30 - chat.offsetWidth; // 右侧30px
                const chatY = position.y - 170 - chat.offsetHeight; // 上方170px
                
                // 确保聊天窗口不超出屏幕边界
                const chatMaxX = window.innerWidth - chat.offsetWidth;
                const chatMaxY = window.innerHeight - chat.offsetHeight;
                
                const chatBoundedX = Math.max(0, Math.min(chatX, chatMaxX));
                const chatBoundedY = Math.max(0, Math.min(chatY, chatMaxY));
                
                chat.style.left = chatBoundedX + 'px';
                chat.style.top = chatBoundedY + 'px';
                chat.style.right = 'auto';
                chat.style.bottom = 'auto';
                
                console.log('PathBot位置已恢复');
            } catch (e) {
                console.log('位置恢复失败，使用默认位置');
            }
        }
    }
    
    // 页面加载时初始化
    document.addEventListener('DOMContentLoaded', () => {
        // 确保PathBot按钮可见，聊天窗口隐藏
        if (fab) {
            fab.style.display = 'flex';
            console.log('PathBot按钮已显示');
        }
        if (chat) {
            chat.classList.add('pathbot-hidden');
            console.log('PathBot聊天窗口已隐藏');
        }
        
        if (fab) {
            // 恢复位置
            restorePathBotPosition();
            
            // 初始化拖拽功能
            initDragAndDrop();
        }
        
        // 确保聊天窗口初始状态为空
        if (messages) {
            messages.innerHTML = '';
            console.log('聊天消息区域已清空');
        }
        
        // 强制确保聊天窗口隐藏（双重保险）
        setTimeout(() => {
            if (chat && !chat.classList.contains('pathbot-hidden')) {
                chat.classList.add('pathbot-hidden');
                console.log('强制隐藏PathBot聊天窗口');
            }
        }, 100);
    });
})();