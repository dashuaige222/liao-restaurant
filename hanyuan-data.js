/**
 * ============================================
 * 翰苑餐厅真实数据
 * ============================================
 * 基于hanyuan.md文件的实际档口和菜品数据
 */

const hanyuanRealData = {
    id: 'chinese',
    name: '翰苑',
    icon: '🥢',
    desc: '传统中华美食，地道家乡味道',
    stalls: [
        {
            id: 'stall-1',
            name: '档口1 - 特色蒸饺、高唐名吃老豆腐、铁塔烤肠',
            dishes: [
                { id: 'dish-1-1', name: '鲜肉蒸饺', desc: '350克', price: 9, tag: '招牌推荐', image: 'images/chinese-stall1-dish1.jpg' },
                { id: 'dish-1-2', name: '胡萝卜肉蒸饺', desc: '350克', price: 9, tag: null, image: 'images/chinese-stall1-dish2.jpg' },
                { id: 'dish-1-3', name: '鲜肉玉米粒蒸饺', desc: '350克', price: 9, tag: null, image: 'images/chinese-stall1-dish3.jpg' },
                { id: 'dish-1-4', name: '香菇肉蒸饺', desc: '350克', price: 10, tag: null, image: 'images/chinese-stall1-dish4.jpg' },
                { id: 'dish-1-5', name: '虾仁肉蒸饺', desc: '350克', price: 12, tag: '人气爆款', image: 'images/chinese-stall1-dish5.jpg' },
                { id: 'dish-1-6', name: '淀粉肠', desc: '70克/根', price: 2.5, tag: null, image: 'images/chinese-stall1-dish6.jpg' },
                { id: 'dish-1-7', name: '纯肉肠', desc: '70克/根', price: 3.5, tag: null, image: 'images/chinese-stall1-dish7.jpg' },
                { id: 'dish-1-8', name: '大碗老豆腐', desc: '高唐名吃', price: 4, tag: null, image: 'images/chinese-stall1-dish8.jpg' },
                { id: 'dish-1-9', name: '小碗老豆腐', desc: '高唐名吃', price: 3, tag: null, image: 'images/chinese-stall1-dish9.jpg' },
                { id: 'dish-1-10', name: '馒头两个', desc: '实惠搭配', price: 1, tag: null, image: 'images/chinese-stall1-dish10.jpg' }
            ]
        },
        {
            id: 'stall-2',
            name: '档口2 - 特色烤串 四川牛肉面',
            dishes: [
                { id: 'dish-2-1', name: '红烧牛肉面', desc: '四川风味', price: 7, tag: '招牌推荐', image: 'images/chinese-stall2-dish1.jpg' },
                { id: 'dish-2-2', name: '飘香牛肉面', desc: '四川风味', price: 8, tag: null, image: 'images/chinese-stall2-dish2.jpg' },
                { id: 'dish-2-3', name: '勾魂干拌面', desc: '四川风味', price: 7, tag: null, image: 'images/chinese-stall2-dish3.jpg' },
                { id: 'dish-2-4', name: '爽口臊子拌面', desc: '四川风味', price: 8, tag: null, image: 'images/chinese-stall2-dish4.jpg' },
                { id: 'dish-2-5', name: '盐酥鸡', desc: '150g/份', price: 8, tag: '人气爆款', image: 'images/chinese-stall2-dish5.jpg' },
                { id: 'dish-2-6', name: '甘梅地瓜', desc: '150g/份', price: 8, tag: null, image: 'images/chinese-stall2-dish6.jpg' },
                { id: 'dish-2-7', name: '黄金薯条', desc: '150g/份', price: 6, tag: null, image: 'images/chinese-stall2-dish7.jpg' },
                { id: 'dish-2-8', name: '烤鸡腿', desc: '100g', price: 6, tag: null, image: 'images/chinese-stall2-dish8.jpg' },
                { id: 'dish-2-9', name: '烤肠', desc: '150g/串', price: 5, tag: null, image: 'images/chinese-stall2-dish9.jpg' },
                { id: 'dish-2-10', name: '阿拉伯大串', desc: '50g/串', price: 5, tag: null, image: 'images/chinese-stall2-dish10.jpg' }
            ]
        },
        {
            id: 'stall-3',
            name: '档口3 - 老母鸡汤 葱油饼',
            dishes: [
                { id: 'dish-3-1', name: '小碗母鸡汤', desc: '450g（冲一个鸡蛋）', price: 3, tag: '招牌推荐', image: 'images/chinese-stall3-dish1.jpg' },
                { id: 'dish-3-2', name: '大碗母鸡汤', desc: '850g（冲两个鸡蛋）', price: 5, tag: null, image: 'images/chinese-stall3-dish2.jpg' },
                { id: 'dish-3-3', name: '葱油饼', desc: '500g/斤', price: 7, tag: null, image: 'images/chinese-stall3-dish3.jpg' },
                { id: 'dish-3-4', name: '鸡蛋饼', desc: '500g/斤', price: 7, tag: null, image: 'images/chinese-stall3-dish4.jpg' },
                { id: 'dish-3-5', name: '酱香饼', desc: '130g/份', price: 2.5, tag: '人气爆款', image: 'images/chinese-stall3-dish5.jpg' },
                { id: 'dish-3-6', name: '卤鸡蛋', desc: '营养美味', price: 1, tag: null, image: 'images/chinese-stall3-dish6.jpg' },
                { id: 'dish-3-7', name: '淀粉肠', desc: '经典小吃', price: 2.5, tag: null, image: 'images/chinese-stall3-dish7.jpg' },
                { id: 'dish-3-8', name: '肉肠', desc: '纯肉制作', price: 3.5, tag: null, image: 'images/chinese-stall3-dish8.jpg' },
                { id: 'dish-3-9', name: '烤豆腐', desc: '50g/串', price: 2.5, tag: null, image: 'images/chinese-stall3-dish9.jpg' },
                { id: 'dish-3-10', name: '烤面筋', desc: '90g/串', price: 3, tag: null, image: 'images/chinese-stall3-dish10.jpg' }
            ]
        },
        {
            id: 'stall-4',
            name: '档口4 - 煮方便面 早餐豆浆',
            dishes: [
                { id: 'dish-4-1', name: '煮方便面', desc: '经典早餐', price: 5, tag: '招牌推荐', image: 'images/chinese-stall4-dish1.jpg' },
                { id: 'dish-4-2', name: '豆浆', desc: '现磨豆浆', price: 2, tag: null, image: 'images/chinese-stall4-dish2.jpg' },
                { id: 'dish-4-3', name: '油条', desc: '酥脆可口', price: 2, tag: null, image: 'images/chinese-stall4-dish3.jpg' },
                { id: 'dish-4-4', name: '茶叶蛋', desc: '入味香浓', price: 1.5, tag: null, image: 'images/chinese-stall4-dish4.jpg' },
                { id: 'dish-4-5', name: '小米粥', desc: '养胃早餐', price: 2, tag: '人气爆款', image: 'images/chinese-stall4-dish5.jpg' },
                { id: 'dish-4-6', name: '八宝粥', desc: '营养丰富', price: 3, tag: null, image: 'images/chinese-stall4-dish6.jpg' },
                { id: 'dish-4-7', name: '豆腐脑', desc: '嫩滑爽口', price: 2.5, tag: null, image: 'images/chinese-stall4-dish7.jpg' },
                { id: 'dish-4-8', name: '煎饼果子', desc: '天津风味', price: 5, tag: null, image: 'images/chinese-stall4-dish8.jpg' },
                { id: 'dish-4-9', name: '肉夹馍', desc: '陕西风味', price: 6, tag: null, image: 'images/chinese-stall4-dish9.jpg' },
                { id: 'dish-4-10', name: '鸡蛋灌饼', desc: '河南风味', price: 4, tag: null, image: 'images/chinese-stall4-dish10.jpg' }
            ]
        },
        {
            id: 'stall-5',
            name: '档口5 - 面行人（汤面/汤粉/拌面/拌粉）',
            dishes: [
                { id: 'dish-5-1', name: '经典拌面', desc: '500g', price: 5, tag: '招牌推荐', image: 'images/chinese-stall5-dish1.jpg' },
                { id: 'dish-5-2', name: '沙茶酱拌面', desc: '500g', price: 5.5, tag: null, image: 'images/chinese-stall5-dish2.jpg' },
                { id: 'dish-5-3', name: '葱油拌面', desc: '500g', price: 6, tag: null, image: 'images/chinese-stall5-dish3.jpg' },
                { id: 'dish-5-4', name: '麻汁拌面', desc: '500g', price: 6, tag: null, image: 'images/chinese-stall5-dish4.jpg' },
                { id: 'dish-5-5', name: '火鸡拌面', desc: '500g', price: 6, tag: '人气爆款', image: 'images/chinese-stall5-dish5.jpg' },
                { id: 'dish-5-6', name: '南昌拌粉', desc: '400g', price: 6, tag: null, image: 'images/chinese-stall5-dish6.jpg' },
                { id: 'dish-5-7', name: '营养骨汤面', desc: '汤面系列', price: 5, tag: null, image: 'images/chinese-stall5-dish7.jpg' },
                { id: 'dish-5-8', name: '酸辣汤面', desc: '汤面系列', price: 6, tag: null, image: 'images/chinese-stall5-dish8.jpg' },
                { id: 'dish-5-9', name: '西红柿鸡蛋面', desc: '汤面系列', price: 7, tag: null, image: 'images/chinese-stall5-dish9.jpg' },
                { id: 'dish-5-10', name: '酸菜肉丝面', desc: '汤面系列', price: 8, tag: null, image: 'images/chinese-stall5-dish10.jpg' }
            ]
        },
        {
            id: 'stall-6',
            name: '档口6 - 绝味荷叶饼&掉渣饼',
            dishes: [
                { id: 'dish-6-1', name: '叉烧饭', desc: '500g，含鸡肉', price: 4, tag: '招牌推荐', image: 'images/chinese-stall6-dish1.jpg' },
                { id: 'dish-6-2', name: '里脊肉饼', desc: '160g，含鸡肉', price: 5, tag: null, image: 'images/chinese-stall6-dish2.jpg' },
                { id: 'dish-6-3', name: '荷叶饼', desc: '200g', price: 4.5, tag: null, image: 'images/chinese-stall6-dish3.jpg' },
                { id: 'dish-6-4', name: '呱嗒', desc: '200g，含猪肉', price: 5, tag: null, image: 'images/chinese-stall6-dish4.jpg' },
                { id: 'dish-6-5', name: '腿排饼', desc: '160g，含鸡肉', price: 5, tag: '人气爆款', image: 'images/chinese-stall6-dish5.jpg' },
                { id: 'dish-6-6', name: '鸡肉卷', desc: '160g，含鸡肉', price: 5, tag: null, image: 'images/chinese-stall6-dish6.jpg' },
                { id: 'dish-6-7', name: '手抓饼', desc: '120g，含鸡蛋', price: 4, tag: null, image: 'images/chinese-stall6-dish7.jpg' },
                { id: 'dish-6-8', name: '汉堡饼', desc: '150g，含鸡肉', price: 5, tag: null, image: 'images/chinese-stall6-dish8.jpg' },
                { id: 'dish-6-9', name: '煎包', desc: '100g，含猪肉', price: 2, tag: null, image: 'images/chinese-stall6-dish9.jpg' },
                { id: 'dish-6-10', name: '照烧鸡肉饼', desc: '150g，含鸡肉', price: 4, tag: null, image: 'images/chinese-stall6-dish10.jpg' }
            ]
        },
        {
            id: 'stall-7',
            name: '档口7 - 精品快餐',
            dishes: [
                { id: 'dish-7-1', name: '两素套餐', desc: '免费米饭/馒头选1', price: 6, tag: '招牌推荐', image: 'images/chinese-stall7-dish1.jpg' },
                { id: 'dish-7-2', name: '一荤一素套餐', desc: '免费米饭/馒头选1', price: 8, tag: null, image: 'images/chinese-stall7-dish2.jpg' },
                { id: 'dish-7-3', name: '两荤套餐', desc: '免费米饭/馒头选1', price: 10, tag: null, image: 'images/chinese-stall7-dish3.jpg' },
                { id: 'dish-7-4', name: '一荤两素套餐', desc: '免费米饭/馒头选1', price: 10, tag: null, image: 'images/chinese-stall7-dish4.jpg' },
                { id: 'dish-7-5', name: '两荤一素套餐', desc: '免费米饭/馒头选1', price: 12, tag: '人气爆款', image: 'images/chinese-stall7-dish5.jpg' },
                { id: 'dish-7-6', name: '红烧肉', desc: '经典荤菜', price: 8, tag: null, image: 'images/chinese-stall7-dish6.jpg' },
                { id: 'dish-7-7', name: '糖醋里脊', desc: '酸甜可口', price: 8, tag: null, image: 'images/chinese-stall7-dish7.jpg' },
                { id: 'dish-7-8', name: '鱼香肉丝', desc: '川菜经典', price: 8, tag: null, image: 'images/chinese-stall7-dish8.jpg' },
                { id: 'dish-7-9', name: '宫保鸡丁', desc: '麻辣鲜香', price: 8, tag: null, image: 'images/chinese-stall7-dish9.jpg' },
                { id: 'dish-7-10', name: '木须肉', desc: '家常美味', price: 8, tag: null, image: 'images/chinese-stall7-dish10.jpg' }
            ]
        },
        {
            id: 'stall-8',
            name: '档口8 - 板凳面/鱼汤面/淄博烤肉卷饼',
            dishes: [
                { id: 'dish-8-1', name: '鱼汤面', desc: '鲜美鱼汤', price: 8, tag: '招牌推荐', image: 'images/chinese-stall8-dish1.jpg' },
                { id: 'dish-8-2', name: '招牌烧肉面', desc: '特色面食', price: 8, tag: null, image: 'images/chinese-stall8-dish2.jpg' },
                { id: 'dish-8-3', name: '红烧牛肉面', desc: '经典面食', price: 10, tag: null, image: 'images/chinese-stall8-dish3.jpg' },
                { id: 'dish-8-4', name: '番茄牛腩面', desc: '酸甜可口', price: 10, tag: null, image: 'images/chinese-stall8-dish4.jpg' },
                { id: 'dish-8-5', name: '咖喱牛肉面', desc: '异域风味', price: 10, tag: '人气爆款', image: 'images/chinese-stall8-dish5.jpg' },
                { id: 'dish-8-6', name: '麻辣黏糊面', desc: '特色面食', price: 8, tag: null, image: 'images/chinese-stall8-dish6.jpg' },
                { id: 'dish-8-7', name: '武汉热干面', desc: '武汉风味', price: 8, tag: null, image: 'images/chinese-stall8-dish7.jpg' },
                { id: 'dish-8-8', name: '麻酱拌面', desc: '香浓麻酱', price: 8, tag: null, image: 'images/chinese-stall8-dish8.jpg' },
                { id: 'dish-8-9', name: '肉丁炸酱面', desc: '老北京风味', price: 8, tag: null, image: 'images/chinese-stall8-dish9.jpg' },
                { id: 'dish-8-10', name: '西红柿鸡蛋面', desc: '家常美味', price: 7, tag: null, image: 'images/chinese-stall8-dish10.jpg' }
            ]
        },
        {
            id: 'stall-9',
            name: '档口9 - 山西花样饼',
            dishes: [
                { id: 'dish-9-1', name: '水煎包', desc: '110g', price: 2, tag: '招牌推荐', image: 'images/chinese-stall9-dish1.jpg' },
                { id: 'dish-9-2', name: '鸡蛋火腿片夹饼', desc: '200g', price: 4, tag: null, image: 'images/chinese-stall9-dish2.jpg' },
                { id: 'dish-9-3', name: '土豆丝鸡蛋夹饼', desc: '200g', price: 4, tag: null, image: 'images/chinese-stall9-dish3.jpg' },
                { id: 'dish-9-4', name: '鸡腿排夹饼', desc: '200g', price: 5, tag: null, image: 'images/chinese-stall9-dish4.jpg' },
                { id: 'dish-9-5', name: '辣条烤肠夹饼', desc: '200g', price: 5, tag: '人气爆款', image: 'images/chinese-stall9-dish5.jpg' },
                { id: 'dish-9-6', name: '猪肉茄子馅饼', desc: '190g', price: 3, tag: null, image: 'images/chinese-stall9-dish6.jpg' },
                { id: 'dish-9-7', name: '肉夹馍', desc: '200g', price: 4, tag: null, image: 'images/chinese-stall9-dish7.jpg' },
                { id: 'dish-9-8', name: '里脊夹饼', desc: '200g', price: 5, tag: null, image: 'images/chinese-stall9-dish8.jpg' },
                { id: 'dish-9-9', name: '红豆馅饼', desc: '160g', price: 6, tag: null, image: 'images/chinese-stall9-dish9.jpg' },
                { id: 'dish-9-10', name: '酱香饼', desc: '130g', price: 2.5, tag: null, image: 'images/chinese-stall9-dish10.jpg' }
            ]
        },
        {
            id: 'stall-10',
            name: '档口10 - 正宗太和板面 广东石磨肠粉',
            dishes: [
                { id: 'dish-10-1', name: '太和板面', desc: '安徽太和风味', price: 7, tag: '招牌推荐', image: 'images/chinese-stall10-dish1.jpg' },
                { id: 'dish-10-2', name: '猪肉臊子面', desc: '特色面食', price: 8, tag: null, image: 'images/chinese-stall10-dish2.jpg' },
                { id: 'dish-10-3', name: '猪肉炸酱面', desc: '老北京风味', price: 8, tag: null, image: 'images/chinese-stall10-dish3.jpg' },
                { id: 'dish-10-4', name: '炒鸡汤面', desc: '鲜美鸡汤', price: 8, tag: null, image: 'images/chinese-stall10-dish4.jpg' },
                { id: 'dish-10-5', name: '牛杂面', desc: '广东风味', price: 10, tag: '人气爆款', image: 'images/chinese-stall10-dish5.jpg' },
                { id: 'dish-10-6', name: '原味肠粉', desc: '300g', price: 6, tag: null, image: 'images/chinese-stall10-dish6.jpg' },
                { id: 'dish-10-7', name: '鸡蛋肠粉', desc: '300g', price: 7, tag: null, image: 'images/chinese-stall10-dish7.jpg' },
                { id: 'dish-10-8', name: '双蛋肠粉', desc: '400g', price: 8, tag: null, image: 'images/chinese-stall10-dish8.jpg' },
                { id: 'dish-10-9', name: '鸡蛋火腿肠粉', desc: '450g', price: 8, tag: null, image: 'images/chinese-stall10-dish9.jpg' },
                { id: 'dish-10-10', name: '鸡蛋瘦肉肠粉', desc: '500g', price: 10, tag: null, image: 'images/chinese-stall10-dish10.jpg' }
            ]
        },
        {
            id: 'stall-11',
            name: '档口11 - 东北炒菜·爱心营养餐',
            dishes: [
                { id: 'dish-11-1', name: '两素套餐', desc: '米饭/馒头二选一，每份220g', price: 6, tag: '招牌推荐', image: 'images/chinese-stall11-dish1.jpg' },
                { id: 'dish-11-2', name: '一荤一素套餐', desc: '米饭/馒头二选一，每份220g', price: 8, tag: null, image: 'images/chinese-stall11-dish2.jpg' },
                { id: 'dish-11-3', name: '一荤两素套餐', desc: '米饭/馒头二选一，每份220g', price: 10, tag: null, image: 'images/chinese-stall11-dish3.jpg' },
                { id: 'dish-11-4', name: '两荤一素套餐', desc: '米饭/馒头二选一，每份220g', price: 12, tag: '人气爆款', image: 'images/chinese-stall11-dish4.jpg' },
                { id: 'dish-11-5', name: '锅包肉', desc: '东北经典', price: 12, tag: null, image: 'images/chinese-stall11-dish5.jpg' },
                { id: 'dish-11-6', name: '地三鲜', desc: '东北经典', price: 10, tag: null, image: 'images/chinese-stall11-dish6.jpg' },
                { id: 'dish-11-7', name: '小鸡炖蘑菇', desc: '东北经典', price: 15, tag: null, image: 'images/chinese-stall11-dish7.jpg' },
                { id: 'dish-11-8', name: '猪肉炖粉条', desc: '东北经典', price: 12, tag: null, image: 'images/chinese-stall11-dish8.jpg' },
                { id: 'dish-11-9', name: '酸菜白肉', desc: '东北经典', price: 12, tag: null, image: 'images/chinese-stall11-dish9.jpg' },
                { id: 'dish-11-10', name: '尖椒干豆腐', desc: '东北经典', price: 8, tag: null, image: 'images/chinese-stall11-dish10.jpg' }
            ]
        },
        {
            id: 'stall-12',
            name: '档口12 - 水饺 馄饨 面',
            dishes: [
                { id: 'dish-12-1', name: '酸汤水饺', desc: '大份800g/小份600g', price: 10, tag: '招牌推荐', image: 'images/chinese-stall12-dish1.jpg' },
                { id: 'dish-12-2', name: '牛肉水饺', desc: '大份600g/小份400g', price: 9, tag: null, image: 'images/chinese-stall12-dish2.jpg' },
                { id: 'dish-12-3', name: '猪肉水饺', desc: '大份600g/小份400g', price: 8, tag: null, image: 'images/chinese-stall12-dish3.jpg' },
                { id: 'dish-12-4', name: '芹菜肉水饺', desc: '大份600g/小份400g', price: 8, tag: null, image: 'images/chinese-stall12-dish4.jpg' },
                { id: 'dish-12-5', name: '虾仁馄饨', desc: '大份750g/小份350g', price: 10, tag: '人气爆款', image: 'images/chinese-stall12-dish5.jpg' },
                { id: 'dish-12-6', name: '香菇馄饨', desc: '大份750g/小份350g', price: 8, tag: null, image: 'images/chinese-stall12-dish6.jpg' },
                { id: 'dish-12-7', name: '精肉馄饨', desc: '大份750g/小份350g', price: 7, tag: null, image: 'images/chinese-stall12-dish7.jpg' },
                { id: 'dish-12-8', name: '馄饨面', desc: '经典搭配', price: 7, tag: null, image: 'images/chinese-stall12-dish8.jpg' },
                { id: 'dish-12-9', name: '红油拌馄饨', desc: '川味特色', price: 7, tag: null, image: 'images/chinese-stall12-dish9.jpg' },
                { id: 'dish-12-10', name: '麻汁拌馄饨', desc: '香浓麻酱', price: 7, tag: null, image: 'images/chinese-stall12-dish10.jpg' }
            ]
        },
        {
            id: 'stall-13',
            name: '档口13 - 切馅大包 小笼包',
            dishes: [
                { id: 'dish-13-1', name: '鸡肉包', desc: '大包系列', price: 2, tag: '招牌推荐', image: 'images/chinese-stall13-dish1.jpg' },
                { id: 'dish-13-2', name: '酱肉包', desc: '大包系列', price: 2, tag: null, image: 'images/chinese-stall13-dish2.jpg' },
                { id: 'dish-13-3', name: '大葱肉包', desc: '大包系列', price: 2, tag: null, image: 'images/chinese-stall13-dish3.jpg' },
                { id: 'dish-13-4', name: '玉米肉包', desc: '大包系列', price: 2, tag: null, image: 'images/chinese-stall13-dish4.jpg' },
                { id: 'dish-13-5', name: '鲜肉小笼包', desc: '300g/笼', price: 8, tag: '人气爆款', image: 'images/chinese-stall13-dish5.jpg' },
                { id: 'dish-13-6', name: '麻辣鲜肉小笼包', desc: '300g/笼', price: 8, tag: null, image: 'images/chinese-stall13-dish6.jpg' },
                { id: 'dish-13-7', name: '玉米肉小笼包', desc: '300g/笼', price: 8, tag: null, image: 'images/chinese-stall13-dish7.jpg' },
                { id: 'dish-13-8', name: '素三鲜小笼包', desc: '300g/笼', price: 7, tag: null, image: 'images/chinese-stall13-dish8.jpg' },
                { id: 'dish-13-9', name: '萝卜鸡蛋包', desc: '素包系列', price: 1.5, tag: null, image: 'images/chinese-stall13-dish9.jpg' },
                { id: 'dish-13-10', name: '麻辣豆腐包', desc: '素包系列', price: 1.5, tag: null, image: 'images/chinese-stall13-dish10.jpg' }
            ]
        },
        {
            id: 'stall-14',
            name: '档口14 - 炒焖饼/面条/米饭/方便面/河粉',
            dishes: [
                { id: 'dish-14-1', name: '经典炒方便面', desc: '大份500g/小份350g', price: 9, tag: '招牌推荐', image: 'images/chinese-stall14-dish1.jpg' },
                { id: 'dish-14-2', name: '特色炒面条', desc: '大份500g/小份350g', price: 9, tag: null, image: 'images/chinese-stall14-dish2.jpg' },
                { id: 'dish-14-3', name: '爽口豆芽炒饼', desc: '大份500g/小份350g', price: 9, tag: null, image: 'images/chinese-stall14-dish3.jpg' },
                { id: 'dish-14-4', name: '怪味炒米饭', desc: '大份500g/小份350g', price: 9, tag: null, image: 'images/chinese-stall14-dish4.jpg' },
                { id: 'dish-14-5', name: '炒河粉', desc: '大份500g/小份350g', price: 9, tag: '人气爆款', image: 'images/chinese-stall14-dish5.jpg' },
                { id: 'dish-14-6', name: '鸡蛋炒饭', desc: '经典炒饭', price: 8, tag: null, image: 'images/chinese-stall14-dish6.jpg' },
                { id: 'dish-14-7', name: '扬州炒饭', desc: '扬州风味', price: 10, tag: null, image: 'images/chinese-stall14-dish7.jpg' },
                { id: 'dish-14-8', name: '肉丝炒面', desc: '经典炒面', price: 8, tag: null, image: 'images/chinese-stall14-dish8.jpg' },
                { id: 'dish-14-9', name: '鸡蛋炒饼', desc: '北方特色', price: 7, tag: null, image: 'images/chinese-stall14-dish9.jpg' },
                { id: 'dish-14-10', name: '干炒牛河', desc: '广东风味', price: 10, tag: null, image: 'images/chinese-stall14-dish10.jpg' }
            ]
        },
        {
            id: 'stall-15',
            name: '档口15 - 正宗饸饹面',
            dishes: [
                { id: 'dish-15-1', name: '饸饹面', desc: '850g', price: 8, tag: '招牌推荐', image: 'images/chinese-stall15-dish1.jpg' },
                { id: 'dish-15-2', name: '重庆小面', desc: '850g', price: 8, tag: null, image: 'images/chinese-stall15-dish2.jpg' },
                { id: 'dish-15-3', name: '手擀面', desc: '850g', price: 8, tag: null, image: 'images/chinese-stall15-dish3.jpg' },
                { id: 'dish-15-4', name: '热干面', desc: '700g', price: 8, tag: null, image: 'images/chinese-stall15-dish4.jpg' },
                { id: 'dish-15-5', name: '朝鲜面', desc: '850g', price: 8, tag: '人气爆款', image: 'images/chinese-stall15-dish5.jpg' },
                { id: 'dish-15-6', name: '炸酱面', desc: '700g', price: 8, tag: null, image: 'images/chinese-stall15-dish6.jpg' },
                { id: 'dish-15-7', name: '清汤饸饹', desc: '800g', price: 6, tag: null, image: 'images/chinese-stall15-dish7.jpg' },
                { id: 'dish-15-8', name: '鸡蛋龙须面', desc: '小份350g', price: 3, tag: null, image: 'images/chinese-stall15-dish8.jpg' },
                { id: 'dish-15-9', name: '鸡蛋龙须面', desc: '大份700g', price: 5, tag: null, image: 'images/chinese-stall15-dish9.jpg' },
                { id: 'dish-15-10', name: '牛肉饸饹面', desc: '特色面食', price: 10, tag: null, image: 'images/chinese-stall15-dish10.jpg' }
            ]
        },
        {
            id: 'stall-16',
            name: '档口16 - 杂粮煎饼',
            dishes: [
                { id: 'dish-16-1', name: '杂粮煎饼', desc: '基础款', price: 5, tag: '招牌推荐', image: 'images/chinese-stall16-dish1.jpg' },
                { id: 'dish-16-2', name: '黑椒鸡扒煎饼', desc: '加料款', price: 8.5, tag: null, image: 'images/chinese-stall16-dish2.jpg' },
                { id: 'dish-16-3', name: '纯肉肠煎饼', desc: '加料款', price: 8.5, tag: null, image: 'images/chinese-stall16-dish3.jpg' },
                { id: 'dish-16-4', name: '脆骨肠煎饼', desc: '加料款', price: 7.5, tag: null, image: 'images/chinese-stall16-dish4.jpg' },
                { id: 'dish-16-5', name: '玉米肠煎饼', desc: '加料款', price: 7.5, tag: '人气爆款', image: 'images/chinese-stall16-dish5.jpg' },
                { id: 'dish-16-6', name: '川香鸡柳煎饼', desc: '加料款', price: 7, tag: null, image: 'images/chinese-stall16-dish6.jpg' },
                { id: 'dish-16-7', name: '火腿片煎饼', desc: '加料款', price: 7, tag: null, image: 'images/chinese-stall16-dish7.jpg' },
                { id: 'dish-16-8', name: '培根煎饼', desc: '加料款', price: 6.5, tag: null, image: 'images/chinese-stall16-dish8.jpg' },
                { id: 'dish-16-9', name: '鸡蛋煎饼', desc: '加料款', price: 6, tag: null, image: 'images/chinese-stall16-dish9.jpg' },
                { id: 'dish-16-10', name: '土豆丝煎饼', desc: '加料款', price: 6, tag: null, image: 'images/chinese-stall16-dish10.jpg' }
            ]
        },
        {
            id: 'stall-17',
            name: '档口17 - 红豆坊粥铺',
            dishes: [
                { id: 'dish-17-1', name: '小米南瓜粥', desc: '450ml', price: 2, tag: '招牌推荐', image: 'images/chinese-stall17-dish1.jpg' },
                { id: 'dish-17-2', name: '糯香黑米粥', desc: '450ml', price: 2, tag: null, image: 'images/chinese-stall17-dish2.jpg' },
                { id: 'dish-17-3', name: '椰奶燕麦粥', desc: '450ml', price: 2.5, tag: null, image: 'images/chinese-stall17-dish3.jpg' },
                { id: 'dish-17-4', name: '紫薯粥', desc: '450ml', price: 2, tag: null, image: 'images/chinese-stall17-dish4.jpg' },
                { id: 'dish-17-5', name: '八宝粥', desc: '450ml', price: 2, tag: '人气爆款', image: 'images/chinese-stall17-dish5.jpg' },
                { id: 'dish-17-6', name: '豆奶', desc: '450ml', price: 2, tag: null, image: 'images/chinese-stall17-dish6.jpg' },
                { id: 'dish-17-7', name: '原味豆浆', desc: '450ml', price: 2, tag: null, image: 'images/chinese-stall17-dish7.jpg' },
                { id: 'dish-17-8', name: '冰绿豆沙', desc: '500ml', price: 3, tag: null, image: 'images/chinese-stall17-dish8.jpg' },
                { id: 'dish-17-9', name: '酸梅汤', desc: '500ml', price: 3, tag: null, image: 'images/chinese-stall17-dish9.jpg' },
                { id: 'dish-17-10', name: '椰奶', desc: '450ml', price: 2, tag: null, image: 'images/chinese-stall17-dish10.jpg' }
            ]
        },
        {
            id: 'stall-18',
            name: '档口18 - 营养套餐',
            dishes: [
                { id: 'dish-18-1', name: '一荤两素套餐', desc: '米饭/馒头，600-800克', price: 10, tag: '招牌推荐', image: 'images/chinese-stall18-dish1.jpg' },
                { id: 'dish-18-2', name: '两荤一素套餐', desc: '米饭/馒头，600-800克', price: 12, tag: null, image: 'images/chinese-stall18-dish2.jpg' },
                { id: 'dish-18-3', name: '一荤一素套餐', desc: '米饭/馒头，600-800克', price: 8, tag: null, image: 'images/chinese-stall18-dish3.jpg' },
                { id: 'dish-18-4', name: '两素套餐', desc: '米饭/馒头，600-800克', price: 6, tag: null, image: 'images/chinese-stall18-dish4.jpg' },
                { id: 'dish-18-5', name: '鱼香肉丝套餐', desc: '两素+米饭', price: 10, tag: '人气爆款', image: 'images/chinese-stall18-dish5.jpg' },
                { id: 'dish-18-6', name: '糖醋里脊套餐', desc: '两素+米饭', price: 10, tag: null, image: 'images/chinese-stall18-dish6.jpg' },
                { id: 'dish-18-7', name: '红烧肉套餐', desc: '两素+米饭', price: 10, tag: null, image: 'images/chinese-stall18-dish7.jpg' },
                { id: 'dish-18-8', name: '香酥鸭腿排套餐', desc: '两素+米饭', price: 10, tag: null, image: 'images/chinese-stall18-dish8.jpg' },
                { id: 'dish-18-9', name: '卤鸡腿套餐', desc: '两素+米饭', price: 10, tag: null, image: 'images/chinese-stall18-dish9.jpg' },
                { id: 'dish-18-10', name: '咖喱鸡肉套餐', desc: '两素+米饭', price: 10, tag: null, image: 'images/chinese-stall18-dish10.jpg' }
            ]
        },
        {
            id: 'stall-19',
            name: '档口19 - 猪肘面 羊杂面',
            dishes: [
                { id: 'dish-19-1', name: '葱香酱拌面', desc: '拌面类', price: 9, tag: '招牌推荐', image: 'images/chinese-stall19-dish1.jpg' },
                { id: 'dish-19-2', name: '烤肉酱拌面', desc: '拌面类', price: 9, tag: null, image: 'images/chinese-stall19-dish2.jpg' },
                { id: 'dish-19-3', name: '孜然酱拌面', desc: '拌面类', price: 9, tag: null, image: 'images/chinese-stall19-dish3.jpg' },
                { id: 'dish-19-4', name: '黑胡椒酱拌面', desc: '拌面类', price: 9, tag: null, image: 'images/chinese-stall19-dish4.jpg' },
                { id: 'dish-19-5', name: '椒麻鸡拌面', desc: '拌面类', price: 9, tag: '人气爆款', image: 'images/chinese-stall19-dish5.jpg' },
                { id: 'dish-19-6', name: '羊杂面', desc: '汤面类', price: 11, tag: null, image: 'images/chinese-stall19-dish6.jpg' },
                { id: 'dish-19-7', name: '辣肉面', desc: '汤面类', price: 11, tag: null, image: 'images/chinese-stall19-dish7.jpg' },
                { id: 'dish-19-8', name: '清汤面', desc: '特惠汤面', price: 6, tag: null, image: 'images/chinese-stall19-dish8.jpg' },
                { id: 'dish-19-9', name: '猪肘面', desc: '特色面食', price: 12, tag: null, image: 'images/chinese-stall19-dish9.jpg' },
                { id: 'dish-19-10', name: '红烧牛肉面', desc: '经典面食', price: 10, tag: null, image: 'images/chinese-stall19-dish10.jpg' }
            ]
        },
        {
            id: 'stall-20',
            name: '档口20 - 辣椒炒肉拌饭 现炒爆汁浇头面',
            dishes: [
                { id: 'dish-20-1', name: '辣椒炒肉拌饭', desc: '拌饭/拌面', price: 13, tag: '招牌推荐', image: 'images/chinese-stall20-dish1.jpg' },
                { id: 'dish-20-2', name: '香干炒肉拌饭', desc: '拌饭/拌面', price: 13, tag: null, image: 'images/chinese-stall20-dish2.jpg' },
                { id: 'dish-20-3', name: '绝味手撕鸭拌饭', desc: '拌饭/拌面', price: 13, tag: null, image: 'images/chinese-stall20-dish3.jpg' },
                { id: 'dish-20-4', name: '农家一碗端拌饭', desc: '拌饭/拌面', price: 13, tag: null, image: 'images/chinese-stall20-dish4.jpg' },
                { id: 'dish-20-5', name: '外婆菜炒鸡蛋拌饭', desc: '拌饭/拌面', price: 11, tag: '人气爆款', image: 'images/chinese-stall20-dish5.jpg' },
                { id: 'dish-20-6', name: '肉末炒粉皮拌饭', desc: '拌饭/拌面', price: 12, tag: null, image: 'images/chinese-stall20-dish6.jpg' },
                { id: 'dish-20-7', name: '长沙口味鸡拌饭', desc: '拌饭/拌面', price: 14, tag: null, image: 'images/chinese-stall20-dish7.jpg' },
                { id: 'dish-20-8', name: '烟笋腊肉拌饭', desc: '拌饭/拌面', price: 14, tag: null, image: 'images/chinese-stall20-dish8.jpg' },
                { id: 'dish-20-9', name: '辣椒炒肉拌面', desc: '现炒浇头', price: 13, tag: null, image: 'images/chinese-stall20-dish9.jpg' },
                { id: 'dish-20-10', name: '长沙口味鸡拌面', desc: '现炒浇头', price: 14, tag: null, image: 'images/chinese-stall20-dish10.jpg' }
            ]
        },
        {
            id: 'stall-21',
            name: '档口21 - 米线·土豆粉',
            dishes: [
                { id: 'dish-21-1', name: '酱香鸡肉米线', desc: '750g', price: 7, tag: '招牌推荐', image: 'images/chinese-stall21-dish1.jpg' },
                { id: 'dish-21-2', name: '鲜汁番茄米线', desc: '750g', price: 7, tag: null, image: 'images/chinese-stall21-dish2.jpg' },
                { id: 'dish-21-3', name: '酸菜米线', desc: '750g', price: 7, tag: null, image: 'images/chinese-stall21-dish3.jpg' },
                { id: 'dish-21-4', name: '番茄米线', desc: '750g', price: 7, tag: null, image: 'images/chinese-stall21-dish4.jpg' },
                { id: 'dish-21-5', name: '牛肉米线', desc: '750g，微辣', price: 8, tag: '人气爆款', image: 'images/chinese-stall21-dish5.jpg' },
                { id: 'dish-21-6', name: '鸡汤米线', desc: '750g', price: 7, tag: null, image: 'images/chinese-stall21-dish6.jpg' },
                { id: 'dish-21-7', name: '酸辣金汤米线', desc: '750g', price: 7, tag: null, image: 'images/chinese-stall21-dish7.jpg' },
                { id: 'dish-21-8', name: '番茄土豆粉', desc: '土豆粉系列', price: 8, tag: null, image: 'images/chinese-stall21-dish8.jpg' },
                { id: 'dish-21-9', name: '麻辣土豆粉', desc: '土豆粉系列', price: 8, tag: null, image: 'images/chinese-stall21-dish9.jpg' },
                { id: 'dish-21-10', name: '鸡汤土豆粉', desc: '土豆粉系列', price: 8, tag: null, image: 'images/chinese-stall21-dish10.jpg' }
            ]
        },
        {
            id: 'stall-22',
            name: '档口22 - 现磨豆浆·五谷豆浆·豆腐脑',
            dishes: [
                { id: 'dish-22-1', name: '豆腐脑', desc: '嫩滑爽口', price: 2.5, tag: '招牌推荐', image: 'images/chinese-stall22-dish1.jpg' },
                { id: 'dish-22-2', name: '黄豆豆浆', desc: '现磨豆浆', price: 1.5, tag: null, image: 'images/chinese-stall22-dish2.jpg' },
                { id: 'dish-22-3', name: '五谷豆浆', desc: '营养丰富', price: 2, tag: null, image: 'images/chinese-stall22-dish3.jpg' },
                { id: 'dish-22-4', name: '红枣豆浆', desc: '养生豆浆', price: 2, tag: null, image: 'images/chinese-stall22-dish4.jpg' },
                { id: 'dish-22-5', name: '黑米豆浆', desc: '养生豆浆', price: 2, tag: '人气爆款', image: 'images/chinese-stall22-dish5.jpg' },
                { id: 'dish-22-6', name: '黑芝麻豆浆', desc: '养生豆浆', price: 2, tag: null, image: 'images/chinese-stall22-dish6.jpg' },
                { id: 'dish-22-7', name: '原味豆浆', desc: '经典豆浆', price: 1.5, tag: null, image: 'images/chinese-stall22-dish7.jpg' },
                { id: 'dish-22-8', name: '绿豆豆浆', desc: '清热解暑', price: 2, tag: null, image: 'images/chinese-stall22-dish8.jpg' },
                { id: 'dish-22-9', name: '花生豆浆', desc: '香浓可口', price: 2, tag: null, image: 'images/chinese-stall22-dish9.jpg' },
                { id: 'dish-22-10', name: '核桃豆浆', desc: '补脑益智', price: 2.5, tag: null, image: 'images/chinese-stall22-dish10.jpg' }
            ]
        },
        {
            id: 'stall-23',
            name: '档口23 - 初味轻食·沙拉·三明治',
            dishes: [
                { id: 'dish-23-1', name: '三明治', desc: '轻食系列', price: 7, tag: '招牌推荐', image: 'images/chinese-stall23-dish1.jpg' },
                { id: 'dish-23-2', name: '时蔬沙拉', desc: '轻食系列', price: 8, tag: null, image: 'images/chinese-stall23-dish2.jpg' },
                { id: 'dish-23-3', name: '水果沙拉', desc: '轻食系列', price: 10, tag: null, image: 'images/chinese-stall23-dish3.jpg' },
                { id: 'dish-23-4', name: '低卡鸡胸能量谷物饭', desc: '健康轻食', price: 11, tag: null, image: 'images/chinese-stall23-dish4.jpg' },
                { id: 'dish-23-5', name: '海洋低卡谷物饭', desc: '健康轻食', price: 12, tag: '人气爆款', image: 'images/chinese-stall23-dish5.jpg' },
                { id: 'dish-23-6', name: '深海金枪鱼沙拉谷物饭', desc: '健康轻食', price: 12, tag: null, image: 'images/chinese-stall23-dish6.jpg' },
                { id: 'dish-23-7', name: '美味大虾能量谷物饭', desc: '健康轻食', price: 13, tag: null, image: 'images/chinese-stall23-dish7.jpg' },
                { id: 'dish-23-8', name: '香煎牛排能量炫饭', desc: '健康轻食', price: 13, tag: null, image: 'images/chinese-stall23-dish8.jpg' },
                { id: 'dish-23-9', name: '牛排+鸡肉谷物饭', desc: '健康轻食', price: 15, tag: null, image: 'images/chinese-stall23-dish9.jpg' },
                { id: 'dish-23-10', name: '鸡胸肉沙拉', desc: '健身首选', price: 12, tag: null, image: 'images/chinese-stall23-dish10.jpg' }
            ]
        }
    ]
};
