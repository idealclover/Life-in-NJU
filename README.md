# Awsome-NJU

## 南京大学网络资源一览

**🤣咦？好像这所学校也不错>v<**

受项目[SEU-ITE/awesome-seu](https://github.com/SEU-ITE/awesome-seu)启发，本着**给我南也整一个**的思想而形成的项目，并在建设过程中参考了 [zzh1996/USTC-Network-Resources](https://github.com/zzh1996/USTC-Network-Resources)

本项目暂时由我个人维护，由于个人所知项目较少，如有项目与其他分享请尽管 [**提ISSUE**](https://github.com/idealclover/awesome-nju/issues) 或 [ **提PR**](https://github.com/idealclover/awesome-nju/pulls) 或 [**QQ**:1455169173](http://wpa.qq.com/msgrd?v=3&uin=1455169173&site=qq&menu=yes)！感谢！

> * [0. 前言](#0-前言)
> * [1.  网络接入](#1--网络接入)
> * [2. 信息获取](#2-信息获取)
> * [3. 官方平台](#3-官方平台)
> * [4. 资源分享](#4-资源分享)
> * [5. 黑科技项目](#5-黑科技项目)
>    * [Web](#web)
>    * [Android](#android)
>    * [iOS](#ios)
>    * [浏览器插件](#浏览器插件)
>    * [小程序](#小程序)
>    * [Python](#python)
> * [6. 社团安利](#6-社团安利)
> * [7. 其他学生福利](#7-其他学生福利)

## 0. 前言

南哪大学有丰富的网络资源供我们学生使用，仅仅以 nju.edu.cn 结尾的域名就有数百个，这还只是指学校官方所维护的资源，而由学生自发组织建设的各类项目则又有更多，但我们大多数人对这些资源知之甚少。

我经常看到同学在得知某个网站，心想如果大一的时候就知道该多好啊！同时，学校官方与我们同学辛辛苦苦搭建的网站或者花很多钱购买的服务，却没有几个学生去用，也是一笔很大的浪费。

于是我决定整理出这样一个项目来总结一下在南哪，我们能找到的各种资源和相应的使用方法。再次强调，如果有我没提到的或者错误的地方，欢迎提出 Issue 和 Pull request。

同时也欢迎 star 该项目以加入到自己的关注列表，同时也欢迎 watch 该项目以获取最新资讯。你的支持是我前进最大的动力。

> 注：
> - ⚠️：不保证可用性
> - 🚧：项目未完工或未部署线上
> - 😏：只能通过**校园网**访问

## 1.  网络接入

😏 [大名鼎鼎的 p(y).nju 登录网址](http://p.nju.edu.cn)

网络接入本是一项头疼的问题，但是在推出了并发两线程和无感知认证服务([2019.5.5](http://bbs.nju.edu.cn/bbstcon?board=M_NIC&file=M.1558703193.A))后，变得异常简单轻松并无需反复登录。故其实很多项目用不太到了，但在次列出一些过往项目，如有需要可供参考。

* 命令行登录校园网(Windows,MacOS,Linux均可用):`curl http://p.nju.edu.cn/portal_io/login -X POST -d "username=你的学号&password=你的密码"`
* [自动连接校园网(Python)](https://github.com/forewing/LogInAutomatic) by [@forewing](https://github.com/forewing)
* [自动连接校园网(Mac)](https://github.com/songkuixi/NJULogin-Mac) by [@songkuixi](https://github.com/songkuixi)
* [自动连接校园网(Android)](https://github.com/LilyStudio/AutoConnect-Android) by [@padeoe](https://github.com/padeoe)
* 🚧 [南京大学 BRAS 登录 App on iOS](https://github.com/songkuixi/NJULogin) by [@songkuixi](https://github.com/songkuixi)

## 2. 信息获取

* [南京大学教务处](http://jw.nju.edu.cn/)

  学期选课信息，停调课信息

* [南京大学国际交流合作处](http://stuex.nju.edu.cn/)

  交流交换项目信息

* 😏 [南京大学小百合BBS](http://bbs.nju.edu.cn/)

  由于某些原因不定期抽风（指只能校园网查看），可以找到辅导员发的信息，一些官方信息。

## 3. 官方平台

* [南京大学电子邮箱系统](https://mail.smail.nju.edu.cn/)

  我校的学校电子邮件系统，学生以 @smail.nju.edu.cn 结尾 ~~有点长（小声bb）~~  初始用户名为学号，初始密码为身份证号（[出处](https://nic.nju.edu.cn/e2/96/c9773a189078/page.htm)）。建议尽快修改密码，这个密码 **要求有大小写字母和数字** ~~知道为啥总忘记密码了吧？~~
  建议注册，首先学生邮箱可以薅很多羊毛，其次校内一些平台也要求使用电子邮箱账号。

* [南京大学微软软件授权服务](http://kms.nju.edu.cn/)

  我校微软软件授权网站，学校统一购买了 Windows 和 Office 的授权 ~~求求你们不要再用盗版系统和 Office 了 Orz~~ 可以在这里直接下载对应的版本与激活程序

* [南京大学图书馆电子资源](http://lib.nju.edu.cn/html/database.htm)

  我校图书馆电子资源总览，可以一眼看到都买了些什么数据库并方便地检索。

* [南京大学云盘](https://box.nju.edu.cn/)

  校内的云盘，同样由人工微结构科学与技术协同创新中心维护，但由于经费问题只服务部分在校师生，具体包括：

  * 全校在编教职工、博士后、博士生
  * 物理学院、电子科学与工程学院、现代工程与应用工程学院、化学化工学院、匡亚明学院的所有人员
  * 理科试验班(数理科学类)、电子信息类、工科试验班、理科试验班类(化学与生命科学类)大类招生尚未分流的本科生

  符合要求的同学可使用统一身份认证的用户名与密码进行登录。

* [南京大学 VPN](http://vpn.nju.edu.cn)

  别想多了，这个 VPN 是为物理位置不在学校但还是需要去知网等等地方下载文献的老哥用的，可以让你在校外也近似连接到校园网。用统一身份认证的用户名和密码登录。

* [南京大学开源镜像站](https://mirrors.nju.edu.cn/)

  由人工微结构科学与技术协同创新中心维护的开源镜像站，提供各 linux 发行版在内的各种软件镜像，享受内网 10M/s+ 速度。
  
* [Nanjing University Git](https://git.nju.edu.cn)

  校内的 git 平台，由人工微结构科学与技术协同创新中心维护，采用 gitlab 搭建，码代码的同学可以把项目托管在上面，享受极致内网网速。
  使用南京大学电子邮箱及对应密码登录。

## 4. 资源分享

* 😏 [南京大学紫荆站](http://zijingbt.njuftp.org/index.html)

  校园网打开，电子邮箱注册，这是啥咱也不知道咱也不敢说不敢问，打开就对了，不吃亏。

* 😏 [米课MiCourse](http://micourse.net/)

  小百合工作室出品，课程评价和查找课程评价的网站，主要以通识课为主，以避免大家踩雷为主要目的。

* [南哪复习资料](https://github.com/idealclover/NJU-Review-Materials) by [@idealclover](https://github.com/idealclover)

  傻翠的项目，整理了南哪部分院系部分课程的复习资料，欢迎贡献。

* [(软院)专业课复习资料](https://github.com/NJU-SE-15-share-review/professional-class) by [@NJU-SE-15-share-review](https://github.com/NJU-SE-15-share-review)

  15 级软院项目，整理了软院的课程复习资料。

* [南京大学悦读经典计划电子图书数据库](http://njdxydjd.mh.libsou.com)

  南京大学悦读经典计划的基本书目，扩展书目全在里面~ 还有电子资源的下载~

* [南京大学计算机2019考研](https://github.com/ThyrixYang/nju_cs_kaoyan_19/wiki) by [@ThyrixYang](https://github.com/ThyrixYang)

* [南京大学学位论文XeLaTeX模板](https://github.com/Haixing-Hu/nju-thesis) by [@Haixing-Hu](https://github.com/Haixing-Hu)

* [南京大学本科毕业论文Latex模板](https://github.com/ZLCao/NJUBachelor) by [@ZLCao](https://github.com/ZLCao)

* [南京大学山寨毕业论文模版](https://github.com/jiangyy/njuthesis) by [@jiangyy](https://github.com/jiangyy)

* 😏 [新东方多媒体学习库](http://library.koolearn.com)

  校园网进入，里面还是有一些课程的，可以看一看。

## 5. 黑科技项目

这里收录了由智慧的南哪同学自发编写的各种平台的各种黑科技项目。

如果你也有自己的项目，欢迎投稿！

### Web

* [JB-Online](https://njujb.com/) by [@NJUCSE17](https://github.com/NJUCSE17)

  Code repository of JB Online multi-purpose forum. [GitHub](https://github.com/NJUCSE17/JB-Online)

* [在线一键课程评估网站](https://fuck.idealclover.cn/) by [@idealclover](https://github.com/idealclover)

  由可爱的傻翠出品的南哪大学课程评估自动化网站，原本是个脚本后来被一顿魔改做成了在线网站，可以直接给老师默认好评。[GitHub](https://github.com/idealclover/Fxxk-NJU-Class-Evaluator)

### Android

* [南哪课表(Android)](https://github.com/idealclover/NJU-Class-Shedule-Android) by [@idealclover](https://github.com/idealclover)

  还是由可爱的傻翠 ~~要不要脸 orz~~ 出品的南哪课表，支持南哪教务处导入课程表。[GitHub](https://github.com/idealclover/NJU-Class-Shedule-Android)

### iOS

* [南京大学小助手](https://github.com/NJUDrivers/NJUHelper) by [@NJUDrivers](https://github.com/NJUDrivers)

### 浏览器插件

* [GPA计算器](https://github.com/viccrubs/ChromeNJUGPACalculator) by [@viccrubs](https://github.com/viccrubs)

### 小程序

* 🚧 [南大小百合的微信小程序&后台服务](https://github.com/Flamingo-Team/LittleLily-Wechat-Service) by [@Flamingo-Team](https://github.com/Flamingo-Team)

* [南京大学失物招领平台小程序](https://github.com/hackathonwithlonglongname/MiniWorld) by [hackathonwithlonglongname](https://github.com/hackathonwithlonglongname)

### Python

* ⚠️ [验证码识别系统(Python)](https://github.com/leonhx/njucaptcha) by [@leonhx](https://github.com/leonhx)

## 6. 社团安利

学校里一些搞技术的社团，想要 ~~搞基~~ 搞技术的同学可以瞧一瞧：

* [南京大学IT侠主页](https://itxia.club/)

* [南京大学IT侠博客](https://itxia.github.io/)

* 😏 [南京大学小百合工作室主页](http://www.lilystudio.org)

## 7. 其他学生福利

[这里](https://github.com/ivmm/Student-resources) 和 [这里](https://github.com/wowlusitong/awesome-education) 有专门的 GitHub 项目整理学生可以享受到的优惠。在这里只是列出一些根据我校情况需要特殊强调的优惠：

* [Office in Education](https://products.office.com/en-us/student?tab=students)
  微软家提供的免费 Office 365 教育优惠，虽说中国大多数学校无缘申请，但很不幸南哪**可以**享受这份 365 套餐，不过只能使用桌面版的 Office 365 emmm

* [AWS Student](https://aws.amazon.com/cn/education/awseducate/)
  亚马逊 AWS 学生包，大多数中国学校无法申请，使用南哪电子邮箱实测**可以**申请，不过需要控制额度
