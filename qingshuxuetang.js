// ==UserScript==
// @name        qingshuxuetang.com
// @namespace   Violentmonkey Scripts
// @match       https://degree.qingshuxuetang.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 11/5/2024, 5:34:18 PM
// ==/UserScript==


(function () {
    'use strict';
    // 在 source 面板中，设置断点
    // 在文件：https://degree.qingshuxuetang.com/resources/default/ui/lib/onlinecourse/coursewareNodesManager-1.0.js?v=202312271504
    // 非直播：在 407 行：onMenuClick 方法里设置断点
    // 直播：在 416 行：onLiveClick 方法里设置断点

    // 非直播：在设置断点后，点击播放，然后，在 console 面板输入如下代码，回车，就可以拿到所有的播放地址
    /*
     *
       let items = [];
        context['coursewareNodes'].forEach((i) => {
            i['nodes'].forEach((j) => {
                j['nodes'] && j['nodes'].forEach((q) => {
                    items.push( `https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=${q.id}`)
                })
            })
        });
        const result = items.join(',');
        console.log(result);
     *
     */
    //const playStr = 'https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_1,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_2,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_3,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_4,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_5,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_6,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_7,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_8,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_1_9,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_1,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_2,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_3,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_4,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_5,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_6,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_7,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_8,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_2_9,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_3_1,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_3_2,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_3_3,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_3_4,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_3_5,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_3_6,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_1,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_2,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_3,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_4,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_5,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_6,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_7,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_8,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_9,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_10,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_11,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_12,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_13,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_14,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_15,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseShow?teachPlanId=153&periodId=22&courseId=1055&nodeId=kcjs_4_16';

    // 直播：在设置断点后，点击播放，然后，在 console 面板输入如下代码，回车，就可以拿到所有的播放地址
    /**
     *
        let items = [];
        context['lives'].forEach((i) => {
            i['nodes'].forEach((j) => {
                j['nodes'] && j['nodes'].forEach((q) => {
                    items.push(`https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=${q.id}&scheduleId=747`);
                });
            })
        })

        // 方案1：保存 join 的结果
        const result = items.join(',');
        console.log(result);
     *
     */
    const playStr = 'https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3317&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3318&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3275&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3276&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3216&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3217&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3181&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3182&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3076&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3077&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3004&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=3005&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=2939&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=2940&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=2861&scheduleId=747,https://degree.qingshuxuetang.com/wywm/Student/Course/CourseLiveShow?teachPlanId=153&periodId=22&courseId=1053&liveLessonId=2862&scheduleId=747';


    // 播放列表 URL
    const playList = playStr.split(',');
    console.log(playList)

    // 获取当前页面 URL 在播放列表中的索引
    const currentIndex = playList.indexOf(window.location.href);

    function playNextEpisode() {
        if (currentIndex !== -1 && currentIndex < playList.length - 1) {
            const nextUrl = playList[currentIndex + 1];
            console.log(`跳转到下一集: ${nextUrl}`);
            window.location.href = nextUrl;
        } else {
            console.log("已经是最后一集或页面不在播放列表中。");
        }
    }

    function tryPlayVideo(video) {
        video.play().then(() => {
            console.log("视频已成功播放");
        }).catch(error => {
            console.log("播放失败，等待用户交互...");
        });
    }

    function setupVideoAutoplay(video) {
        video.addEventListener("ended", playNextEpisode); // 视频结束跳转到下一集

        // 尝试播放视频
        tryPlayVideo(video);

        // 等待用户的首次交互
        const interactionHandler = () => {
            console.log("检测到用户交互，重试播放视频");
            tryPlayVideo(video);
            window.removeEventListener("click", interactionHandler); // 移除事件监听
        };

        window.addEventListener("click", interactionHandler); // 监听用户点击
    }

    const checkVideoReady = setInterval(() => {
        const video = document.querySelector('video[class=vjs-tech]'); // 假设页面上只有一个 video 标签
        if (video) {
            clearInterval(checkVideoReady); // 视频加载后停止检查
            setupVideoAutoplay(video);
        }
    }, 1000); // 每秒检查一次视频是否加载

})();