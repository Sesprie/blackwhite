
//
// https://github.com/txthinking/pac
//

var proxy="SOCKS5 [::1]:1090; SOCKS [::1]:1090; DIRECT";

var mode = "black";


var domains = {
	
	"030buy.com": 1,
	
	"0rz.tw": 1,
	
	"1-apple.com.tw": 1,
	
	"1000giri.net": 1,
	
	"100ke.org": 1,
	
	"10conditionsoflove.com": 1,
	
	"10musume.com": 1,
	
	"123rf.com": 1,
	
	"12bet.com": 1,
	
	"12vpn.com": 1,
	
	"12vpn.net": 1,
	
	"14.102.250.18": 1,
	
	"14.102.250.19": 1,
	
	"141hongkong.com": 1,
	
	"141tube.com": 1,
	
	"1688.com.au": 1,
	
	"173ng.com": 1,
	
	"174.142.105.153": 1,
	
	"177pic.info": 1,
	
	"17t17p.com": 1,
	
	"18board.com": 1,
	
	"18board.info": 1,
	
	"18onlygirls.com": 1,
	
	"18p2p.com": 1,
	
	"18virginsex.com": 1,
	
	"1949er.org": 1,
	
	"1984bbs.com": 1,
	
	"1984bbs.org": 1,
	
	"1989report.hkja.org.hk": 1,
	
	"199.59.148.20": 1,
	
	"1991way.com": 1,
	
	"1998cdp.org": 1,
	
	"1bao.org": 1,
	
	"1dumb.com": 1,
	
	"1e100.net": 1,
	
	"1eew.com": 1,
	
	"1mobile.com": 1,
	
	"1mobile.tw": 1,
	
	"1pondo.tv": 1,
	
	"2-hand.info": 1,
	
	"2000fun.com": 1,
	
	"2008xianzhang.info": 1,
	
	"2017.hk": 1,
	
	"21andy.com": 1,
	
	"21pron.com": 1,
	
	"21sextury.com": 1,
	
	"228.net.tw": 1,
	
	"24hrs.ca": 1,
	
	"24smile.org": 1,
	
	"25u.com": 1,
	
	"2dbook.com": 1,
	
	"2lipstube.com": 1,
	
	"2shared.com": 1,
	
	"2waky.com": 1,
	
	"3-a.net": 1,
	
	"30boxes.com": 1,
	
	"315lz.com": 1,
	
	"32red.com": 1,
	
	"36rain.com": 1,
	
	"3a5a.com": 1,
	
	"3arabtv.com": 1,
	
	"3boys2girls.com": 1,
	
	"3d-game.com": 1,
	
	"3proxy.ru": 1,
	
	"3ren.ca": 1,
	
	"3tui.net": 1,
	
	"466453.com": 1,
	
	"4bluestones.biz": 1,
	
	"4chan.com": 1,
	
	"4dq.com": 1,
	
	"4everproxy.com": 1,
	
	"4irc.com": 1,
	
	"4mydomain.com": 1,
	
	"4pu.com": 1,
	
	"4rbtv.com": 1,
	
	"4shared.com": 1,
	
	"4sqi.net": 1,
	
	"4tern.com": 1,
	
	"51.ca": 1,
	
	"51jav.org": 1,
	
	"51luoben.com": 1,
	
	"5278.cc": 1,
	
	"56cun04.jigsy.com": 1,
	
	"5aimiku.com": 1,
	
	"5i01.com": 1,
	
	"5isotoi5.org": 1,
	
	"5maodang.com": 1,
	
	"63i.com": 1,
	
	"64museum.org": 1,
	
	"64tianwang.com": 1,
	
	"64wiki.com": 1,
	
	"66.ca": 1,
	
	"666kb.com": 1,
	
	"67.220.91.15": 1,
	
	"67.220.91.18": 1,
	
	"67.220.91.23": 1,
	
	"69.65.19.160": 1,
	
	"6park.com": 1,
	
	"72.52.81.22": 1,
	
	"7capture.com": 1,
	
	"7cow.com": 1,
	
	"8-d.com": 1,
	
	"85cc.net": 1,
	
	"85cc.us": 1,
	
	"85st.com": 1,
	
	"881903.com": 1,
	
	"888.com": 1,
	
	"888poker.com": 1,
	
	"89-64.org": 1,
	
	"8news.com.tw": 1,
	
	"8z1.net": 1,
	
	"9001700.com": 1,
	
	"908taiwan.org": 1,
	
	"91porn.com": 1,
	
	"92ccav.com": 1,
	
	"991.com": 1,
	
	"99btgc01.com": 1,
	
	"99cn.info": 1,
	
	"9bis.com": 1,
	
	"9bis.net": 1,
	
	"a-normal-day.com": 1,
	
	"a248.e.akamai.net": 1,
	
	"a5.com.ru": 1,
	
	"aamacau.com": 1,
	
	"abc.com": 1,
	
	"abc.pp.ru": 1,
	
	"abc.xyz": 1,
	
	"abchinese.com": 1,
	
	"abclite.net": 1,
	
	"abitno.linpie.com": 1,
	
	"ablwang.com": 1,
	
	"aboluowang.com": 1,
	
	"aboutgfw.com": 1,
	
	"abs.edu": 1,
	
	"ac.jiruan.net": 1,
	
	"accim.org": 1,
	
	"aceros-de-hispania.com": 1,
	
	"acevpn.com": 1,
	
	"acg18.me": 1,
	
	"acgkj.com": 1,
	
	"acmetoy.com": 1,
	
	"acnw.com.au": 1,
	
	"actfortibet.org": 1,
	
	"actimes.com.au": 1,
	
	"activpn.com": 1,
	
	"aculo.us": 1,
	
	"addictedtocoffee.de": 1,
	
	"adelaidebbs.com": 1,
	
	"admob.com": 1,
	
	"adorama.com": 1,
	
	"adpl.org.hk": 1,
	
	"ads-twitter.com": 1,
	
	"adsense.com": 1,
	
	"adult-sex-games.com": 1,
	
	"adult.friendfinder.com": 1,
	
	"adultfriendfinder.com": 1,
	
	"adultkeep.net": 1,
	
	"advanscene.com": 1,
	
	"advertfan.com": 1,
	
	"ae.hao123.com": 1,
	
	"ae.org": 1,
	
	"aenhancers.com": 1,
	
	"af.mil": 1,
	
	"afantibbs.com": 1,
	
	"agnesb.fr": 1,
	
	"agoogleaday.com": 1,
	
	"agro.hk": 1,
	
	"ai-kan.net": 1,
	
	"ai-wen.net": 1,
	
	"ai.binwang.me": 1,
	
	"aiph.net": 1,
	
	"airconsole.com": 1,
	
	"airvpn.org": 1,
	
	"aisex.com": 1,
	
	"aiss.anws.gov.tw": 1,
	
	"ait.org.tw": 1,
	
	"aiweiwei.com": 1,
	
	"aiweiweiblog.com": 1,
	
	"akademiye.org": 1,
	
	"akamaihd.net": 1,
	
	"akiba-online.com": 1,
	
	"akiba-web.com": 1,
	
	"al-islam.com": 1,
	
	"al-qimmah.net": 1,
	
	"alabout.com": 1,
	
	"alanhou.com": 1,
	
	"alarab.qa": 1,
	
	"alasbarricadas.org": 1,
	
	"alexlur.org": 1,
	
	"alforattv.net": 1,
	
	"alhayat.com": 1,
	
	"alicejapan.co.jp": 1,
	
	"alien-ufos.com": 1,
	
	"aliengu.com": 1,
	
	"alkasir.com": 1,
	
	"allconnected.co": 1,
	
	"alldrawnsex.com": 1,
	
	"allervpn.com": 1,
	
	"allfinegirls.com": 1,
	
	"allgirlmassage.com": 1,
	
	"allgirlsallowed.org": 1,
	
	"allgravure.com": 1,
	
	"alliance.org.hk": 1,
	
	"allinfa.com": 1,
	
	"alljackpotscasino.com": 1,
	
	"allmovie.com": 1,
	
	"allowed.org": 1,
	
	"almasdarnews.com": 1,
	
	"almostmy.com": 1,
	
	"alphaporno.com": 1,
	
	"alternate-tools.com": 1,
	
	"alternativeto.net": 1,
	
	"altrec.com": 1,
	
	"alvinalexander.com": 1,
	
	"alwaysdata.com": 1,
	
	"alwaysdata.net": 1,
	
	"alwaysvpn.com": 1,
	
	"am730.com.hk": 1,
	
	"amazon.com": 1,
	
	"ameblo.jp": 1,
	
	"americangreencard.com": 1,
	
	"americanunfinished.com": 1,
	
	"amiblockedornot.com": 1,
	
	"amigobbs.net": 1,
	
	"amitabhafoundation.us": 1,
	
	"amnesty.org": 1,
	
	"amnesty.org.hk": 1,
	
	"amnesty.tw": 1,
	
	"amnestyusa.org": 1,
	
	"amnyemachen.org": 1,
	
	"amoiist.com": 1,
	
	"ampproject.org": 1,
	
	"anchorfree.com": 1,
	
	"ancsconf.org": 1,
	
	"andfaraway.net": 1,
	
	"android-x86.org": 1,
	
	"android.com": 1,
	
	"androidify.com": 1,
	
	"androidplus.co": 1,
	
	"andygod.com": 1,
	
	"angelfire.com": 1,
	
	"angularjs.org": 1,
	
	"animecrazy.net": 1,
	
	"animeshippuuden.com": 1,
	
	"aniscartujo.com": 1,
	
	"annatam.com": 1,
	
	"anobii.com": 1,
	
	"anontext.com": 1,
	
	"anonymise.us": 1,
	
	"anonymitynetwork.com": 1,
	
	"anonymizer.com": 1,
	
	"anpopo.com": 1,
	
	"answering-islam.org": 1,
	
	"anthonycalzadilla.com": 1,
	
	"anti1984.com": 1,
	
	"antichristendom.com": 1,
	
	"antiwave.net": 1,
	
	"anyporn.com": 1,
	
	"anysex.com": 1,
	
	"aobo.com.au": 1,
	
	"aofriend.com": 1,
	
	"aofriend.com.au": 1,
	
	"aojiao.org": 1,
	
	"aolchannels.aol.com": 1,
	
	"aomiwang.com": 1,
	
	"apetube.com": 1,
	
	"api-secure.recaptcha.net": 1,
	
	"api-verify.recaptcha.net": 1,
	
	"api.ai": 1,
	
	"api.dropboxapi.com": 1,
	
	"api.linksalpha.com": 1,
	
	"api.proxlet.com": 1,
	
	"api.recaptcha.net": 1,
	
	"apiary.io": 1,
	
	"apidocs.linksalpha.com": 1,
	
	"apigee.com": 1,
	
	"apk-dl.com": 1,
	
	"apkdler.com": 1,
	
	"apkmirror.com": 1,
	
	"apkmonk.com": 1,
	
	"apkplz.com": 1,
	
	"apkpure.com": 1,
	
	"aplusvpn.com": 1,
	
	"app.box.com": 1,
	
	"app.heywire.com": 1,
	
	"app.tutanota.com": 1,
	
	"appdownloader.net": 1,
	
	"appledaily.com": 1,
	
	"appshopper.com": 1,
	
	"appsocks.net": 1,
	
	"appspot.com": 1,
	
	"appsto.re": 1,
	
	"ar.hao123.com": 1,
	
	"archive.fo": 1,
	
	"archive.is": 1,
	
	"archive.org": 1,
	
	"archives.gov": 1,
	
	"archives.gov.tw": 1,
	
	"arctosia.com": 1,
	
	"areca-backup.org": 1,
	
	"arena.taipei": 1,
	
	"arethusa.su": 1,
	
	"arlingtoncemetery.mil": 1,
	
	"army.mil": 1,
	
	"arstechnica.com": 1,
	
	"art4tibet1998.org": 1,
	
	"artofpeacefoundation.org": 1,
	
	"artsy.net": 1,
	
	"asacp.org": 1,
	
	"asahichinese.com": 1,
	
	"asdfg.jp": 1,
	
	"asg.to": 1,
	
	"asia-gaming.com": 1,
	
	"asiaharvest.org": 1,
	
	"asianews.it": 1,
	
	"asiansexdiary.com": 1,
	
	"asianspiss.com": 1,
	
	"asianwomensfilm.de": 1,
	
	"asiatgp.com": 1,
	
	"asiatoday.us": 1,
	
	"askstudent.com": 1,
	
	"askynz.net": 1,
	
	"assembla.com": 1,
	
	"assimp.org": 1,
	
	"astrill.com": 1,
	
	"atc.org.au": 1,
	
	"atchinese.com": 1,
	
	"atdmt.com": 1,
	
	"atgfw.org": 1,
	
	"athenaeizou.com": 1,
	
	"atlanta168.com": 1,
	
	"atlaspost.com": 1,
	
	"atnext.com": 1,
	
	"authorizeddns.net": 1,
	
	"authorizeddns.org": 1,
	
	"authorizeddns.us": 1,
	
	"av.nightlife141.com": 1,
	
	"avaaz.org": 1,
	
	"avbody.tv": 1,
	
	"avcity.tv": 1,
	
	"avcool.com": 1,
	
	"avdb.in": 1,
	
	"avdb.tv": 1,
	
	"avfantasy.com": 1,
	
	"avidemux.org": 1,
	
	"avmo.pw": 1,
	
	"avmoo.com": 1,
	
	"avmoo.net": 1,
	
	"avmoo.pw": 1,
	
	"avoision.com": 1,
	
	"avyahoo.com": 1,
	
	"axureformac.com": 1,
	
	"azerbaycan.tv": 1,
	
	"azerimix.com": 1,
	
	"azubu.tv": 1,
	
	"azurewebsites.net": 1,
	
	"b0ne.com": 1,
	
	"babynet.com.hk": 1,
	
	"backchina.com": 1,
	
	"backpackers.com.tw": 1,
	
	"backtotiananmen.com": 1,
	
	"badjojo.com": 1,
	
	"badoo.com": 1,
	
	"bahamut.com.tw": 1,
	
	"baidu.jp": 1,
	
	"bailandaily.com": 1,
	
	"baixing.me": 1,
	
	"bakgeekhome.tk": 1,
	
	"banana-vpn.com": 1,
	
	"bandwagonhost.com": 1,
	
	"bangbrosnetwork.com": 1,
	
	"bangchen.net": 1,
	
	"bangyoulater.com": 1,
	
	"bannedbook.org": 1,
	
	"bannednews.org": 1,
	
	"banorte.com": 1,
	
	"baramangaonline.com": 1,
	
	"barenakedislam.com": 1,
	
	"barnabu.co.uk": 1,
	
	"bartvpn.com": 1,
	
	"bash-hackers.org": 1,
	
	"bastillepost.com": 1,
	
	"bayvoice.net": 1,
	
	"bb-chat.tv": 1,
	
	"bb.ttv.com.tw": 1,
	
	"bbc.co.uk": 1,
	
	"bbc.com": 1,
	
	"bbc.in": 1,
	
	"bbcchinese.com": 1,
	
	"bbchat.tv": 1,
	
	"bbg.gov": 1,
	
	"bbkz.com": 1,
	
	"bbnradio.org": 1,
	
	"bbs-tw.com": 1,
	
	"bbs.brockbbs.com": 1,
	
	"bbs.cantonese.asia": 1,
	
	"bbs.ecstart.com": 1,
	
	"bbs.hanminzu.org": 1,
	
	"bbs.hasi.wang": 1,
	
	"bbs.huasing.org": 1,
	
	"bbs.junglobal.net": 1,
	
	"bbs.kimy.com.tw": 1,
	
	"bbs.morbell.com": 1,
	
	"bbs.mychat.to": 1,
	
	"bbs.netbig.com": 1,
	
	"bbs.ozchinese.com": 1,
	
	"bbs.qmzdd.com": 1,
	
	"bbs.sina.com": 1,
	
	"bbs.skykiwi.com": 1,
	
	"bbs.sou-tong.org": 1,
	
	"bbs.tuitui.info": 1,
	
	"bbsdigest.com": 1,
	
	"bbsfeed.com": 1,
	
	"bbsland.com": 1,
	
	"bbsmo.com": 1,
	
	"bbsone.com": 1,
	
	"bbtoystore.com": 1,
	
	"bcast.co.nz": 1,
	
	"bcc.com.tw": 1,
	
	"bcchinese.net": 1,
	
	"bcmorning.com": 1,
	
	"bdsmvideos.net": 1,
	
	"beaconevents.com": 1,
	
	"bebo.com": 1,
	
	"beeg.com": 1,
	
	"beevpn.com": 1,
	
	"behindkink.com": 1,
	
	"beijing1989.com": 1,
	
	"beijingspring.com": 1,
	
	"beijingzx.org": 1,
	
	"belamionline.com": 1,
	
	"bell.wiki": 1,
	
	"bemywife.cc": 1,
	
	"beric.me": 1,
	
	"berlintwitterwall.com": 1,
	
	"berm.co.nz": 1,
	
	"bestforchina.org": 1,
	
	"bestgore.com": 1,
	
	"bestpornstardb.com": 1,
	
	"bestvpn.com": 1,
	
	"bestvpnanalysis.com": 1,
	
	"bestvpnserver.com": 1,
	
	"bestvpnservice.com": 1,
	
	"bestvpnusa.com": 1,
	
	"bet365.com": 1,
	
	"beta.usejump.com": 1,
	
	"betfair.com": 1,
	
	"betternet.co": 1,
	
	"bettervpn.com": 1,
	
	"bettween.com": 1,
	
	"betvictor.com": 1,
	
	"bewww.net": 1,
	
	"beyondfirewall.com": 1,
	
	"bfnn.org": 1,
	
	"bfsh.hk": 1,
	
	"bgvpn.com": 1,
	
	"bianlei.com": 1,
	
	"biantailajiao.com": 1,
	
	"biantailajiao.in": 1,
	
	"biblesforamerica.org": 1,
	
	"bic2011.org": 1,
	
	"bigfools.com": 1,
	
	"bigjapanesesex.com": 1,
	
	"bigmoney.biz": 1,
	
	"bignews.org": 1,
	
	"bigsound.org": 1,
	
	"billypan.com": 1,
	
	"billywr.com": 1,
	
	"binux.me": 1,
	
	"bipic.net": 1,
	
	"bit.do": 1,
	
	"bit.ly": 1,
	
	"bitcointalk.org": 1,
	
	"bitshare.com": 1,
	
	"bitsnoop.com": 1,
	
	"bitvise.com": 1,
	
	"bizhat.com": 1,
	
	"bjnewlife.org": 1,
	
	"bjs.org": 1,
	
	"bjzc.org": 1,
	
	"bl-doujinsouko.com": 1,
	
	"blacklogic.com": 1,
	
	"blackvpn.com": 1,
	
	"blewpass.com": 1,
	
	"blinkx.com": 1,
	
	"blinw.com": 1,
	
	"blip.tv": 1,
	
	"blockcn.com": 1,
	
	"blockless.com": 1,
	
	"blog.calibre-ebook.com": 1,
	
	"blog.cnyes.com": 1,
	
	"blog.daum.net": 1,
	
	"blog.de": 1,
	
	"blog.exblog.co.jp": 1,
	
	"blog.excite.co.jp": 1,
	
	"blog.expofutures.com": 1,
	
	"blog.fizzik.com": 1,
	
	"blog.foolsmountain.com": 1,
	
	"blog.goo.ne.jp": 1,
	
	"blog.google": 1,
	
	"blog.inoreader.com": 1,
	
	"blog.istef.info": 1,
	
	"blog.jackjia.com": 1,
	
	"blog.jp": 1,
	
	"blog.kangye.org": 1,
	
	"blog.lester850.info": 1,
	
	"blog.martinoei.com": 1,
	
	"blog.pathtosharepoint.com": 1,
	
	"blog.pentalogic.net": 1,
	
	"blog.qooza.hk": 1,
	
	"blog.ranxiang.com": 1,
	
	"blog.sina.com.tw": 1,
	
	"blog.sogoo.org": 1,
	
	"blog.soylent.com": 1,
	
	"blog.syx86.cn": 1,
	
	"blog.syx86.com": 1,
	
	"blog.taragana.com": 1,
	
	"blog.tiney.com": 1,
	
	"blog.xuite.net": 1,
	
	"blog.youthwant.com.tw": 1,
	
	"blog.youxu.info": 1,
	
	"blogblog.com": 1,
	
	"blogcatalog.com": 1,
	
	"blogcity.me": 1,
	
	"blogdns.org": 1,
	
	"blogger.com": 1,
	
	"blogimg.jp": 1,
	
	"bloglines.com": 1,
	
	"bloglovin.com": 1,
	
	"blogs.icerocket.com": 1,
	
	"blogs.libraryinformationtechnology.com": 1,
	
	"blogs.tampabay.com": 1,
	
	"blogs.yahoo.co.jp": 1,
	
	"blogspot.com": 1,
	
	"blogspot.hk": 1,
	
	"blogspot.jp": 1,
	
	"blogtd.net": 1,
	
	"blogtd.org": 1,
	
	"bloodshed.net": 1,
	
	"bloomberg.cn": 1,
	
	"bloomberg.com": 1,
	
	"bloomberg.de": 1,
	
	"bloombergview.com": 1,
	
	"bloomfortune.com": 1,
	
	"blueangellive.com": 1,
	
	"bmfinn.com": 1,
	
	"bnews.co": 1,
	
	"bnrmetal.com": 1,
	
	"boardreader.com": 1,
	
	"bod.asia": 1,
	
	"bodog88.com": 1,
	
	"bolehvpn.net": 1,
	
	"bolin.netfirms.com": 1,
	
	"bonbonme.com": 1,
	
	"bonbonsex.com": 1,
	
	"bonfoundation.org": 1,
	
	"bongacams.com": 1,
	
	"boobstagram.com": 1,
	
	"book.com.tw": 1,
	
	"book.zi5.me": 1,
	
	"bookepub.com": 1,
	
	"books.com.tw": 1,
	
	"boomssr.com": 1,
	
	"bot.nu": 1,
	
	"botanwang.com": 1,
	
	"bowenpress.com": 1,
	
	"boxpn.com": 1,
	
	"boxun.com": 1,
	
	"boxun.tv": 1,
	
	"boxunblog.com": 1,
	
	"boxunclub.com": 1,
	
	"boyangu.com": 1,
	
	"boyfriendtv.com": 1,
	
	"boysfood.com": 1,
	
	"boysmaster.com": 1,
	
	"br.hao123.com": 1,
	
	"br.st": 1,
	
	"brainyquote.com": 1,
	
	"brandonhutchinson.com": 1,
	
	"braumeister.org": 1,
	
	"bravotube.net": 1,
	
	"brazzers.com": 1,
	
	"break.com": 1,
	
	"breakgfw.com": 1,
	
	"breaking911.com": 1,
	
	"breakingtweets.com": 1,
	
	"breakwall.net": 1,
	
	"briefdream.com": 1,
	
	"briian.com": 1,
	
	"brizzly.com": 1,
	
	"brkmd.com": 1,
	
	"broadbook.com": 1,
	
	"broadpressinc.com": 1,
	
	"brucewang.net": 1,
	
	"brutaltgp.com": 1,
	
	"bt2mag.com": 1,
	
	"bt95.com": 1,
	
	"btaia.com": 1,
	
	"btbtav.com": 1,
	
	"btdigg.org": 1,
	
	"btku.me": 1,
	
	"btku.org": 1,
	
	"btspread.com": 1,
	
	"budaedu.org": 1,
	
	"buddhanet.com.tw": 1,
	
	"buddhistchannel.tv": 1,
	
	"buffered.com": 1,
	
	"bullog.org": 1,
	
	"bullogger.com": 1,
	
	"bunbunhk.com": 1,
	
	"busayari.com": 1,
	
	"businessinsider.com": 1,
	
	"businessweek.com": 1,
	
	"busu.org": 1,
	
	"busytrade.com": 1,
	
	"buugaa.com": 1,
	
	"buy.yahoo.com.tw": 1,
	
	"buzzhand.com": 1,
	
	"buzzhand.net": 1,
	
	"buzzorange.com": 1,
	
	"bvpn.com": 1,
	
	"bwsj.hk": 1,
	
	"bx.tl": 1,
	
	"bynet.co.il": 1,
	
	"c-est-simple.com": 1,
	
	"c-spanvideo.org": 1,
	
	"c100tibet.org": 1,
	
	"c1522.mooo.com": 1,
	
	"cablegatesearch.net": 1,
	
	"cachinese.com": 1,
	
	"cacnw.com": 1,
	
	"cactusvpn.com": 1,
	
	"cafepress.com": 1,
	
	"cahr.org.tw": 1,
	
	"calameo.com": 1,
	
	"calebelston.com": 1,
	
	"calgarychinese.ca": 1,
	
	"calgarychinese.com": 1,
	
	"calgarychinese.net": 1,
	
	"cam4.com": 1,
	
	"cam4.jp": 1,
	
	"cam4.sg": 1,
	
	"camfrog.com": 1,
	
	"cams.com": 1,
	
	"cams.org.sg": 1,
	
	"canadameet.com": 1,
	
	"canalporno.com": 1,
	
	"canyu.org": 1,
	
	"cao.im": 1,
	
	"caobian.info": 1,
	
	"caochangqing.com": 1,
	
	"cap.org.hk": 1,
	
	"carabinasypistolas.com": 1,
	
	"cardinalkungfoundation.org": 1,
	
	"carfax.com": 1,
	
	"cari.com.my": 1,
	
	"caribbeancom.com": 1,
	
	"carmotorshow.com": 1,
	
	"cartoonmovement.com": 1,
	
	"casadeltibetbcn.org": 1,
	
	"casatibet.org.mx": 1,
	
	"casino.williamhill.com": 1,
	
	"casinobellini.com": 1,
	
	"casinoking.com": 1,
	
	"casinoriva.com": 1,
	
	"catch22.net": 1,
	
	"catfightpayperview.xxx": 1,
	
	"catholic.org.hk": 1,
	
	"catholic.org.tw": 1,
	
	"cathvoice.org.tw": 1,
	
	"cattt.com": 1,
	
	"cbc.ca": 1,
	
	"cbs.ntu.edu.tw": 1,
	
	"cbsnews.com": 1,
	
	"cbtc.org.hk": 1,
	
	"cccat.cc": 1,
	
	"cccat.co": 1,
	
	"ccdtr.org": 1,
	
	"cchere.com": 1,
	
	"ccim.org": 1,
	
	"cclife.ca": 1,
	
	"cclife.org": 1,
	
	"cclifefl.org": 1,
	
	"ccthere.com": 1,
	
	"cctongbao.com": 1,
	
	"ccue.ca": 1,
	
	"ccue.com": 1,
	
	"ccvoice.ca": 1,
	
	"ccw.org.tw": 1,
	
	"cdbook.org": 1,
	
	"cdcparty.com": 1,
	
	"cdef.org": 1,
	
	"cdig.info": 1,
	
	"cdjp.org": 1,
	
	"cdn-apple.com": 1,
	
	"cdn-images.mailchimp.com": 1,
	
	"cdn.assets.lfpcontent.com": 1,
	
	"cdn.helixstudios.net": 1,
	
	"cdn.printfriendly.com": 1,
	
	"cdn.softlayer.net": 1,
	
	"cdn1.lp.saboom.com": 1,
	
	"cdnews.com.tw": 1,
	
	"cdninstagram.com": 1,
	
	"cdp1989.org": 1,
	
	"cdp1998.org": 1,
	
	"cdp2006.org": 1,
	
	"cdpa.url.tw": 1,
	
	"cdpeu.org": 1,
	
	"cdpusa.org": 1,
	
	"cdpweb.org": 1,
	
	"cdpwu.org": 1,
	
	"cdw.com": 1,
	
	"cecc.gov": 1,
	
	"cellulo.info": 1,
	
	"cenews.eu": 1,
	
	"centauro.com.br": 1,
	
	"centerforhumanreprod.com": 1,
	
	"centralnation.com": 1,
	
	"centurys.net": 1,
	
	"certificate-transparency.org": 1,
	
	"certificate.revocationcheck.com": 1,
	
	"cfhks.org.hk": 1,
	
	"cftfc.com": 1,
	
	"cgdepot.org": 1,
	
	"cgst.edu": 1,
	
	"ch.shvoong.com": 1,
	
	"change.org": 1,
	
	"changeip.name": 1,
	
	"changeip.net": 1,
	
	"changeip.org": 1,
	
	"changp.com": 1,
	
	"changsa.net": 1,
	
	"channel8news.sg": 1,
	
	"chapm25.com": 1,
	
	"chatnook.com": 1,
	
	"chaturbate.com": 1,
	
	"chengmingmag.com": 1,
	
	"chenguangcheng.com": 1,
	
	"chenpokong.com": 1,
	
	"chenpokong.net": 1,
	
	"chenshan20042005.wordpress.com": 1,
	
	"cherrysave.com": 1,
	
	"chhongbi.org": 1,
	
	"chicagoncmtv.com": 1,
	
	"china-mmm.jp.net": 1,
	
	"china-mmm.net": 1,
	
	"china-mmm.sa.com": 1,
	
	"china-review.com.ua": 1,
	
	"china-week.com": 1,
	
	"china.hket.com": 1,
	
	"china.ucanews.com": 1,
	
	"china101.com": 1,
	
	"china18.org": 1,
	
	"china21.com": 1,
	
	"china21.org": 1,
	
	"china5000.us": 1,
	
	"chinaaffairs.org": 1,
	
	"chinaaid.me": 1,
	
	"chinaaid.net": 1,
	
	"chinaaid.org": 1,
	
	"chinaaid.us": 1,
	
	"chinachange.org": 1,
	
	"chinachannel.hk": 1,
	
	"chinacitynews.be": 1,
	
	"chinacomments.org": 1,
	
	"chinadialogue.net": 1,
	
	"chinadigitaltimes.net": 1,
	
	"chinaelections.org": 1,
	
	"chinaeweekly.com": 1,
	
	"chinafreepress.org": 1,
	
	"chinagate.com": 1,
	
	"chinageeks.org": 1,
	
	"chinagfw.org": 1,
	
	"chinagonet.com": 1,
	
	"chinagreenparty.org": 1,
	
	"chinahorizon.org": 1,
	
	"chinahush.com": 1,
	
	"chinainperspective.com": 1,
	
	"chinainterimgov.org": 1,
	
	"chinalaborwatch.org": 1,
	
	"chinalawandpolicy.com": 1,
	
	"chinalawtranslate.com": 1,
	
	"chinamule.com": 1,
	
	"chinamz.org": 1,
	
	"chinapost.com.tw": 1,
	
	"chinapress.com.my": 1,
	
	"chinarightsia.org": 1,
	
	"chinasmile.net": 1,
	
	"chinasocialdemocraticparty.com": 1,
	
	"chinasoul.org": 1,
	
	"chinasucks.net": 1,
	
	"chinatimes.com": 1,
	
	"chinatopsex.com": 1,
	
	"chinatown.com.au": 1,
	
	"chinatweeps.com": 1,
	
	"chinaway.org": 1,
	
	"chinaworker.info": 1,
	
	"chinaxchina.com": 1,
	
	"chinayouth.org.hk": 1,
	
	"chinayuanmin.org": 1,
	
	"chinese-hermit.net": 1,
	
	"chinese-leaders.org": 1,
	
	"chinese-memorial.org": 1,
	
	"chinese.engadget.com": 1,
	
	"chinese.irib.ir": 1,
	
	"chinese.soifind.com": 1,
	
	"chinesedaily.com": 1,
	
	"chinesedailynews.com": 1,
	
	"chinesedemocracy.com": 1,
	
	"chinesegay.org": 1,
	
	"chinesen.de": 1,
	
	"chinesepen.org": 1,
	
	"chinesetalks.net": 1,
	
	"chingcheong.com": 1,
	
	"chinman.net": 1,
	
	"chithu.org": 1,
	
	"chn.chosun.com": 1,
	
	"chrdnet.com": 1,
	
	"christianfreedom.org": 1,
	
	"christianstudy.com": 1,
	
	"christiantimes.org.hk": 1,
	
	"christusrex.org": 1,
	
	"chrlawyers.hk": 1,
	
	"chrome.com": 1,
	
	"chromecast.com": 1,
	
	"chromeexperiments.com": 1,
	
	"chromercise.com": 1,
	
	"chromestatus.com": 1,
	
	"chromium.org": 1,
	
	"chuang-yen.org": 1,
	
	"chubold.com": 1,
	
	"chubun.com": 1,
	
	"chuizi.net": 1,
	
	"churchinhongkong.org": 1,
	
	"chushigangdrug.ch": 1,
	
	"cienen.com": 1,
	
	"cineastentreff.de": 1,
	
	"cipfg.org": 1,
	
	"circlethebayfortibet.org": 1,
	
	"citizencn.com": 1,
	
	"citizenlab.org": 1,
	
	"citizenscommission.hk": 1,
	
	"citizensradio.org": 1,
	
	"city365.ca": 1,
	
	"city9x.com": 1,
	
	"citytalk.tw": 1,
	
	"civicparty.hk": 1,
	
	"civildisobediencemovement.org": 1,
	
	"civilhrfront.org": 1,
	
	"civiliangunner.com": 1,
	
	"civilmedia.tw": 1,
	
	"ck101.com": 1,
	
	"cl.d0z.net": 1,
	
	"cl.ly": 1,
	
	"clarionproject.org": 1,
	
	"classicalguitarblog.net": 1,
	
	"clb.org.hk": 1,
	
	"cldr.unicode.org": 1,
	
	"cleansite.biz": 1,
	
	"cleansite.info": 1,
	
	"cleansite.us": 1,
	
	"clearharmony.net": 1,
	
	"clearwisdom.net": 1,
	
	"clementine-player.org": 1,
	
	"cling.omy.sg": 1,
	
	"clinica-tibet.ru": 1,
	
	"clipfish.de": 1,
	
	"cloakpoint.com": 1,
	
	"cloud.mail.ru": 1,
	
	"club1069.com": 1,
	
	"cmi.org.tw": 1,
	
	"cmp.hku.hk": 1,
	
	"cms.gov": 1,
	
	"cmule.com": 1,
	
	"cmule.org": 1,
	
	"cn-proxy.com": 1,
	
	"cn.calameo.com": 1,
	
	"cn.dayabook.com": 1,
	
	"cn.fmnnow.com": 1,
	
	"cn.freeones.com": 1,
	
	"cn.giganews.com": 1,
	
	"cn.ibtimes.com": 1,
	
	"cn.nytstyle.com": 1,
	
	"cn.sandscotaicentral.com": 1,
	
	"cn.shafaqna.com": 1,
	
	"cn.streetvoice.com": 1,
	
	"cn.uncyclopedia.wikia.com": 1,
	
	"cn.voa.mobi": 1,
	
	"cn2.streetvoice.com": 1,
	
	"cn6.eu": 1,
	
	"cna.com.tw": 1,
	
	"cnabc.com": 1,
	
	"cnbbnews.wordpress.com": 1,
	
	"cnd.org": 1,
	
	"cnex.org.cn": 1,
	
	"cnineu.com": 1,
	
	"cnn.com": 1,
	
	"cnnews.chosun.com": 1,
	
	"cnpolitics.org": 1,
	
	"cnproxy.com": 1,
	
	"co.ng.mil": 1,
	
	"coat.co.jp": 1,
	
	"cochina.co": 1,
	
	"cochina.org": 1,
	
	"code1984.com": 1,
	
	"codeshare.io": 1,
	
	"codeskulptor.org": 1,
	
	"collateralmurder.com": 1,
	
	"collateralmurder.org": 1,
	
	"com.google": 1,
	
	"comefromchina.com": 1,
	
	"comic-mega.me": 1,
	
	"commandarms.com": 1,
	
	"commentshk.com": 1,
	
	"communistcrimes.org": 1,
	
	"communitychoicecu.com": 1,
	
	"compileheart.com": 1,
	
	"compress.to": 1,
	
	"connect.facebook.net": 1,
	
	"conoha.jp": 1,
	
	"contactmagazine.net": 1,
	
	"contests.twilio.com": 1,
	
	"convio.net": 1,
	
	"coobay.com": 1,
	
	"coolaler.com": 1,
	
	"coolder.com": 1,
	
	"coolloud.org.tw": 1,
	
	"coolncute.com": 1,
	
	"corumcollege.com": 1,
	
	"cos-moe.com": 1,
	
	"cosmic.monar.ch": 1,
	
	"cosplayjav.pl": 1,
	
	"cotweet.com": 1,
	
	"coursehero.com": 1,
	
	"cpj.org": 1,
	
	"cq99.us": 1,
	
	"crackle.com": 1,
	
	"crazys.cc": 1,
	
	"crchina.org": 1,
	
	"crd-net.org": 1,
	
	"creaders.net": 1,
	
	"creadersnet.com": 1,
	
	"creativelab5.com": 1,
	
	"cristyli.com": 1,
	
	"crocotube.com": 1,
	
	"crossfire.co.kr": 1,
	
	"crossthewall.net": 1,
	
	"crossvpn.net": 1,
	
	"crrev.com": 1,
	
	"csdparty.com": 1,
	
	"css.pixnet.in": 1,
	
	"csuchen.de": 1,
	
	"csw.org.uk": 1,
	
	"ct.org.tw": 1,
	
	"ctao.org": 1,
	
	"ctfriend.net": 1,
	
	"cthlo.github.io": 1,
	
	"ctitv.com.tw": 1,
	
	"cts.com.tw": 1,
	
	"cuhkacs.org": 1,
	
	"cuihua.org": 1,
	
	"cuiweiping.net": 1,
	
	"culture.tw": 1,
	
	"cumlouder.com": 1,
	
	"curvefish.com": 1,
	
	"cusu.hk": 1,
	
	"cw.com.tw": 1,
	
	"cyberghost.natado.com": 1,
	
	"cyberghostvpn.com": 1,
	
	"cynscribe.com": 1,
	
	"cytode.us": 1,
	
	"d-fukyu.com": 1,
	
	"d100.net": 1,
	
	"d1b183sg0nvnuh.cloudfront.net": 1,
	
	"d1c37gjwa26taa.cloudfront.net": 1,
	
	"d2bay.com": 1,
	
	"d2pass.com": 1,
	
	"d3c33hcgiwev3.cloudfront.net": 1,
	
	"d3rhr7kgmtrq1v.cloudfront.net": 1,
	
	"dabr.co.uk": 1,
	
	"dabr.eu": 1,
	
	"dabr.me": 1,
	
	"dabr.mobi": 1,
	
	"dadazim.com": 1,
	
	"dadi360.com": 1,
	
	"dafagood.com": 1,
	
	"dafahao.com": 1,
	
	"dafoh.org": 1,
	
	"dagelijksestandaard.nl": 1,
	
	"daidostup.ru": 1,
	
	"dailidaili.com": 1,
	
	"dailymotion.com": 1,
	
	"dailynews.sina.com": 1,
	
	"daiphapinfo.net": 1,
	
	"dajiyuan.com": 1,
	
	"dajiyuan.de": 1,
	
	"dajiyuan.eu": 1,
	
	"dajusha.baywords.com": 1,
	
	"dalailama-archives.org": 1,
	
	"dalailama.com": 1,
	
	"dalailama.mn": 1,
	
	"dalailama.ru": 1,
	
	"dalailama.usc.edu": 1,
	
	"dalailama80.org": 1,
	
	"dalailamacenter.org": 1,
	
	"dalailamafellows.org": 1,
	
	"dalailamafilm.com": 1,
	
	"dalailamafoundation.org": 1,
	
	"dalailamahindi.com": 1,
	
	"dalailamainaustralia.org": 1,
	
	"dalailamajapanese.com": 1,
	
	"dalailamaprotesters.info": 1,
	
	"dalailamaquotes.org": 1,
	
	"dalailamatrust.org": 1,
	
	"dalailamavisit.org.nz": 1,
	
	"dalailamaworld.com": 1,
	
	"dalianmeng.org": 1,
	
	"daliulian.org": 1,
	
	"danke4china.net": 1,
	
	"danwei.org": 1,
	
	"daodu14.jigsy.com": 1,
	
	"daolan.net": 1,
	
	"daozhongxing.org": 1,
	
	"darktech.org": 1,
	
	"darktoy.net": 1,
	
	"darpa.mil": 1,
	
	"dastrassi.org": 1,
	
	"data-vocabulary.org": 1,
	
	"data.flurry.com": 1,
	
	"data.gov.tw": 1,
	
	"david-kilgour.com": 1,
	
	"dawangidc.com": 1,
	
	"daxa.cn": 1,
	
	"daylife.com": 1,
	
	"db.tt": 1,
	
	"dbc.hk": 1,
	
	"dcard.tw": 1,
	
	"dcmilitary.com": 1,
	
	"ddc.com.tw": 1,
	
	"ddhw.info": 1,
	
	"ddns.info": 1,
	
	"ddns.me.uk": 1,
	
	"ddns.mobi": 1,
	
	"ddns.ms": 1,
	
	"ddns.name": 1,
	
	"ddns.net": 1,
	
	"ddns.us": 1,
	
	"de-sci.org": 1,
	
	"deaftone.com": 1,
	
	"debug.com": 1,
	
	"deck.ly": 1,
	
	"decodet.co": 1,
	
	"deepmind.com": 1,
	
	"deezer.com": 1,
	
	"definebabe.com": 1,
	
	"deja.com": 1,
	
	"delcamp.net": 1,
	
	"delicious.com": 1,
	
	"demo.opera-mini.net": 1,
	
	"democrats.org": 1,
	
	"derekhsu.homeip.net": 1,
	
	"desc.se": 1,
	
	"design.google": 1,
	
	"desipro.de": 1,
	
	"dessci.com": 1,
	
	"destiny.xfiles.to": 1,
	
	"destroy-china.jp": 1,
	
	"deutsche-welle.de": 1,
	
	"developers.box.net": 1,
	
	"devio.us": 1,
	
	"devpn.com": 1,
	
	"dfas.mil": 1,
	
	"dfn.org": 1,
	
	"dharamsalanet.com": 1,
	
	"dharmakara.net": 1,
	
	"dhcp.biz": 1,
	
	"diaoyuislands.org": 1,
	
	"digiland.tw": 1,
	
	"digisfera.com": 1,
	
	"digitalnomadsproject.org": 1,
	
	"diigo.com": 1,
	
	"dilber.se": 1,
	
	"dingchin.com.tw": 1,
	
	"dipity.com": 1,
	
	"directcreative.com": 1,
	
	"discuss.com.hk": 1,
	
	"discuss4u.com": 1,
	
	"dish.com": 1,
	
	"disp.cc": 1,
	
	"disq.us": 1,
	
	"disqus.com": 1,
	
	"dit-inc.us": 1,
	
	"dizhidizhi.com": 1,
	
	"dizhuzhishang.com": 1,
	
	"djangosnippets.org": 1,
	
	"djorz.com": 1,
	
	"dl-laby.jp": 1,
	
	"dl.box.net": 1,
	
	"dlsite.com": 1,
	
	"dlyoutube.com": 1,
	
	"dm530.net": 1,
	
	"dmcdn.net": 1,
	
	"dmm.co.jp": 1,
	
	"dns-dns.com": 1,
	
	"dns-stuff.com": 1,
	
	"dns04.com": 1,
	
	"dns05.com": 1,
	
	"dns1.us": 1,
	
	"dns2.us": 1,
	
	"dns2go.com": 1,
	
	"dnscrypt.org": 1,
	
	"dnset.com": 1,
	
	"dnsrd.com": 1,
	
	"dnssec.net": 1,
	
	"doctorvoice.org": 1,
	
	"dogfartnetwork.com": 1,
	
	"dojin.com": 1,
	
	"dok-forum.net": 1,
	
	"dolc.de": 1,
	
	"dolf.org.hk": 1,
	
	"dollf.com": 1,
	
	"domain.club.tw": 1,
	
	"domainhelp.search.com": 1,
	
	"domains.google": 1,
	
	"domaintoday.com.au": 1,
	
	"dongtaiwang.com": 1,
	
	"dongtaiwang.net": 1,
	
	"dongyangjing.com": 1,
	
	"dontfilter.us": 1,
	
	"dontmovetochina.com": 1,
	
	"dorjeshugden.com": 1,
	
	"dotplane.com": 1,
	
	"dotsub.com": 1,
	
	"dotvpn.com": 1,
	
	"doub.io": 1,
	
	"dougscripts.com": 1,
	
	"douhokanko.net": 1,
	
	"doujincafe.com": 1,
	
	"dowei.org": 1,
	
	"download.aircrack-ng.org": 1,
	
	"download.cnet.com": 1,
	
	"download.ithome.com.tw": 1,
	
	"dphk.org": 1,
	
	"dpp.org.tw": 1,
	
	"dpr.info": 1,
	
	"dragonsprings.org": 1,
	
	"dreamamateurs.com": 1,
	
	"drepung.org": 1,
	
	"drgan.net": 1,
	
	"drmingxia.org": 1,
	
	"dropbooks.tv": 1,
	
	"dropbox.com": 1,
	
	"dropboxusercontent.com": 1,
	
	"drsunacademy.com": 1,
	
	"drtuber.com": 1,
	
	"dscn.info": 1,
	
	"dsmtp.com": 1,
	
	"dstk.dk": 1,
	
	"dtdns.net": 1,
	
	"dtiblog.com": 1,
	
	"dtic.mil": 1,
	
	"dtwang.org": 1,
	
	"duanzhihu.com": 1,
	
	"duck.com": 1,
	
	"duckdns.org": 1,
	
	"duckduckgo-owned-server.yahoo.net": 1,
	
	"duckduckgo.com": 1,
	
	"duckload.com": 1,
	
	"duckmylife.com": 1,
	
	"duga.jp": 1,
	
	"duihua.org": 1,
	
	"duihuahrjournal.org": 1,
	
	"dumb1.com": 1,
	
	"dunyabulteni.net": 1,
	
	"duoweitimes.com": 1,
	
	"duping.net": 1,
	
	"duplicati.com": 1,
	
	"dupola.com": 1,
	
	"dupola.net": 1,
	
	"dushi.ca": 1,
	
	"dvorak.org": 1,
	
	"dw-world.com": 1,
	
	"dw-world.de": 1,
	
	"dw.com": 1,
	
	"dw.de": 1,
	
	"dwnews.com": 1,
	
	"dwnews.net": 1,
	
	"dynamic-dns.net": 1,
	
	"dynamicdns.biz": 1,
	
	"dynamicdns.co.uk": 1,
	
	"dynamicdns.me.uk": 1,
	
	"dynamicdns.org.uk": 1,
	
	"dynawebinc.com": 1,
	
	"dyndns-ip.com": 1,
	
	"dyndns-pics.com": 1,
	
	"dyndns.org": 1,
	
	"dyndns.pro": 1,
	
	"dynssl.com": 1,
	
	"dynu.com": 1,
	
	"dynu.net": 1,
	
	"dynupdate.no-ip.com": 1,
	
	"dzze.com": 1,
	
	"e-classical.com.tw": 1,
	
	"e-gold.com": 1,
	
	"e-hentaidb.com": 1,
	
	"e-info.org.tw": 1,
	
	"e-traderland.net": 1,
	
	"e-zone.com.hk": 1,
	
	"e123.hk": 1,
	
	"earlytibet.com": 1,
	
	"earthcam.com": 1,
	
	"earthvpn.com": 1,
	
	"eastern-ark.com": 1,
	
	"easternlightning.org": 1,
	
	"eastturkestan.com": 1,
	
	"eastturkistan-gov.org": 1,
	
	"eastturkistancc.org": 1,
	
	"eastturkistangovernmentinexile.us": 1,
	
	"easyca.ca": 1,
	
	"easypic.com": 1,
	
	"ebony-beauty.com": 1,
	
	"ebook.hyread.com.tw": 1,
	
	"ebookbrowse.com": 1,
	
	"ebookee.com": 1,
	
	"ecfa.org.tw": 1,
	
	"echofon.com": 1,
	
	"ecimg.tw": 1,
	
	"ecministry.net": 1,
	
	"economist.com": 1,
	
	"ecsm.vs.com": 1,
	
	"edgecastcdn.net": 1,
	
	"edicypages.com": 1,
	
	"edmontonchina.cn": 1,
	
	"edmontonservice.com": 1,
	
	"edns.biz": 1,
	
	"edoors.com": 1,
	
	"edubridge.com": 1,
	
	"edupro.org": 1,
	
	"eeas.europa.eu": 1,
	
	"eesti.ee": 1,
	
	"eevpn.com": 1,
	
	"efcc.org.hk": 1,
	
	"effers.com": 1,
	
	"efksoft.com": 1,
	
	"efukt.com": 1,
	
	"eic-av.com": 1,
	
	"eireinikotaerukai.com": 1,
	
	"eisbb.com": 1,
	
	"eksisozluk.com": 1,
	
	"electionsmeter.com": 1,
	
	"elgoog.im": 1,
	
	"elpais.com": 1,
	
	"eltondisney.com": 1,
	
	"emaga.com": 1,
	
	"emanna.com": 1,
	
	"embr.in": 1,
	
	"emilylau.org.hk": 1,
	
	"empfil.com": 1,
	
	"emule-ed2k.com": 1,
	
	"emulefans.com": 1,
	
	"emuparadise.me": 1,
	
	"en.favotter.net": 1,
	
	"en.hao123.com": 1,
	
	"enanyang.my": 1,
	
	"enewstree.com": 1,
	
	"enfal.de": 1,
	
	"engagedaily.org": 1,
	
	"englishforeveryone.org": 1,
	
	"englishfromengland.co.uk": 1,
	
	"englishpen.org": 1,
	
	"enlighten.org.tw": 1,
	
	"entermap.com": 1,
	
	"entnt.com": 1,
	
	"environment.google": 1,
	
	"epa.gov.tw": 1,
	
	"epac.to": 1,
	
	"episcopalchurch.org": 1,
	
	"epochhk.com": 1,
	
	"epochtimes-bg.com": 1,
	
	"epochtimes-romania.com": 1,
	
	"epochtimes.co.il": 1,
	
	"epochtimes.co.kr": 1,
	
	"epochtimes.com": 1,
	
	"epochtimes.cz": 1,
	
	"epochtimes.de": 1,
	
	"epochtimes.fr": 1,
	
	"epochtimes.ie": 1,
	
	"epochtimes.it": 1,
	
	"epochtimes.jp": 1,
	
	"epochtimes.ru": 1,
	
	"epochtimes.se": 1,
	
	"epochtimestr.com": 1,
	
	"epochweek.com": 1,
	
	"epochweekly.com": 1,
	
	"eporner.com": 1,
	
	"equinenow.com": 1,
	
	"erabaru.net": 1,
	
	"eracom.com.tw": 1,
	
	"eraysoft.com.tr": 1,
	
	"erepublik.com": 1,
	
	"erights.net": 1,
	
	"eriversoft.com": 1,
	
	"erktv.com": 1,
	
	"ernestmandel.org": 1,
	
	"erodaizensyu.com": 1,
	
	"erodoujinlog.com": 1,
	
	"erodoujinworld.com": 1,
	
	"eromanga-kingdom.com": 1,
	
	"eromangadouzin.com": 1,
	
	"eromon.net": 1,
	
	"eroprofile.com": 1,
	
	"eroticsaloon.net": 1,
	
	"eslite.com": 1,
	
	"esmtp.biz": 1,
	
	"etaa.org.au": 1,
	
	"etadult.com": 1,
	
	"etaiwannews.com": 1,
	
	"etizer.org": 1,
	
	"etokki.com": 1,
	
	"etools.ncol.com": 1,
	
	"etowns.net": 1,
	
	"etowns.org": 1,
	
	"ettoday.net": 1,
	
	"etvonline.hk": 1,
	
	"eu.org": 1,
	
	"eucasino.com": 1,
	
	"eulam.com": 1,
	
	"eurekavpt.com": 1,
	
	"evchk.wikia.com": 1,
	
	"evschool.net": 1,
	
	"exblog.jp": 1,
	
	"exchristian.hk": 1,
	
	"exmormon.org": 1,
	
	"expatshield.com": 1,
	
	"expecthim.com": 1,
	
	"expekt.com": 1,
	
	"experts-univers.com": 1,
	
	"exploader.net": 1,
	
	"expressvpn.com": 1,
	
	"extmatrix.com": 1,
	
	"extremetube.com": 1,
	
	"eyevio.jp": 1,
	
	"eyny.com": 1,
	
	"ezpc.tk": 1,
	
	"ezpeer.com": 1,
	
	"ezua.com": 1,
	
	"fa.gov.tw": 1,
	
	"facebook.br": 1,
	
	"facebook.com": 1,
	
	"facebook.design": 1,
	
	"facebook.hu": 1,
	
	"facebook.in": 1,
	
	"facebook.nl": 1,
	
	"facebook.se": 1,
	
	"facebookquotes4u.com": 1,
	
	"faceless.me": 1,
	
	"facesofnyfw.com": 1,
	
	"facesoftibetanselfimmolators.info": 1,
	
	"fail.hk": 1,
	
	"faith100.org": 1,
	
	"faithfuleye.com": 1,
	
	"faiththedog.info": 1,
	
	"fakku.net": 1,
	
	"falsefire.com": 1,
	
	"falun-co.org": 1,
	
	"falun-ny.net": 1,
	
	"falun.caltech.edu": 1,
	
	"falunart.org": 1,
	
	"falunasia.info": 1,
	
	"falunau.org": 1,
	
	"falunaz.net": 1,
	
	"falundafa-dc.org": 1,
	
	"falundafa-florida.org": 1,
	
	"falundafa-nc.org": 1,
	
	"falundafa-pa.net": 1,
	
	"falundafa-sacramento.org": 1,
	
	"falundafa.org": 1,
	
	"falundafaindia.org": 1,
	
	"falundafamuseum.org": 1,
	
	"falungong.club": 1,
	
	"falungong.de": 1,
	
	"falungong.org.uk": 1,
	
	"falunhr.org": 1,
	
	"faluninfo.de": 1,
	
	"faluninfo.net": 1,
	
	"falunpilipinas.net": 1,
	
	"falunworld.net": 1,
	
	"familyfed.org": 1,
	
	"famunion.com": 1,
	
	"fan-qiang.com": 1,
	
	"fangbinxing.com": 1,
	
	"fangeming.com": 1,
	
	"fanglizhi.info": 1,
	
	"fangmincn.org": 1,
	
	"fangong.forums-free.com": 1,
	
	"fangong.org": 1,
	
	"fangongheike.com": 1,
	
	"fanhaodang.com": 1,
	
	"fanqiang.tk": 1,
	
	"fanqianghou.com": 1,
	
	"fanqiangyakexi.net": 1,
	
	"fanqiangzhe.com": 1,
	
	"fanswong.com": 1,
	
	"fanyue.info": 1,
	
	"fapdu.com": 1,
	
	"faproxy.com": 1,
	
	"faqserv.com": 1,
	
	"fartit.com": 1,
	
	"farwestchina.com": 1,
	
	"fast.wistia.com": 1,
	
	"fastpic.ru": 1,
	
	"fastssh.com": 1,
	
	"faststone.org": 1,
	
	"favstar.fm": 1,
	
	"fawanghuihui.org": 1,
	
	"faydao.com": 1,
	
	"fb.com": 1,
	
	"fb.me": 1,
	
	"fbcdn.net": 1,
	
	"fbsbx.com": 1,
	
	"fc2.com": 1,
	
	"fc2blog.net": 1,
	
	"fc2china.com": 1,
	
	"fc2cn.com": 1,
	
	"fda.gov.tw": 1,
	
	"fdc64.de": 1,
	
	"fdc64.org": 1,
	
	"fdc89.jp": 1,
	
	"feedburner.com": 1,
	
	"feeds.fileforum.com": 1,
	
	"feelssh.com": 1,
	
	"feer.com": 1,
	
	"feifeiss.com": 1,
	
	"feitian-california.org": 1,
	
	"feitianacademy.org": 1,
	
	"feministteacher.com": 1,
	
	"fengzhenghu.com": 1,
	
	"fengzhenghu.net": 1,
	
	"fevernet.com": 1,
	
	"ff.im": 1,
	
	"fffff.at": 1,
	
	"fflick.com": 1,
	
	"ffvpn.com": 1,
	
	"fgmtv.net": 1,
	
	"fgmtv.org": 1,
	
	"fhreports.net": 1,
	
	"figprayer.com": 1,
	
	"fileflyer.com": 1,
	
	"files2me.com": 1,
	
	"fileserve.com": 1,
	
	"filesor.com": 1,
	
	"fillthesquare.org": 1,
	
	"filmingfortibet.org": 1,
	
	"filmy.olabloga.pl": 1,
	
	"filthdump.com": 1,
	
	"financetwitter.com": 1,
	
	"finchvpn.com": 1,
	
	"findmespot.com": 1,
	
	"findmima.com": 1,
	
	"findyoutube.com": 1,
	
	"fingerdaily.com": 1,
	
	"finler.net": 1,
	
	"firearmsworld.net": 1,
	
	"firebaseio.com": 1,
	
	"fireofliberty.org": 1,
	
	"firetweet.io": 1,
	
	"firstfivefollowers.com": 1,
	
	"flagsonline.it": 1,
	
	"flecheinthepeche.fr": 1,
	
	"fleshbot.com": 1,
	
	"fleursdeslettres.com": 1,
	
	"flgg.us": 1,
	
	"flgjustice.org": 1,
	
	"flickr.com": 1,
	
	"flickrhivemind.net": 1,
	
	"flickriver.com": 1,
	
	"fling.com": 1,
	
	"flipboard.com": 1,
	
	"flipkart.com": 1,
	
	"flitto.com": 1,
	
	"flnet.org": 1,
	
	"flog.tw": 1,
	
	"fochk.org": 1,
	
	"focustaiwan.tw": 1,
	
	"focusvpn.com": 1,
	
	"fofg-europe.net": 1,
	
	"fofg.org": 1,
	
	"fofldfradio.org": 1,
	
	"fooooo.com": 1,
	
	"footwiball.com": 1,
	
	"forum.baby-kingdom.com": 1,
	
	"forum.cyberctm.com": 1,
	
	"forum.idsam.com": 1,
	
	"forum.my903.com": 1,
	
	"forum.mymaji.com": 1,
	
	"forum.omy.sg": 1,
	
	"forum.palmislife.com": 1,
	
	"forum.setty.com.tw": 1,
	
	"forum.sina.com.hk": 1,
	
	"forum.slime.com.tw": 1,
	
	"forum.tvb.com": 1,
	
	"forum.xinbao.de": 1,
	
	"forum4hk.com": 1,
	
	"fotile.me": 1,
	
	"fourface.nodesnoop.com": 1,
	
	"fourthinternational.org": 1,
	
	"foxdie.us": 1,
	
	"foxgay.com": 1,
	
	"foxsub.com": 1,
	
	"foxtang.com": 1,
	
	"fpmt-osel.org": 1,
	
	"fpmt.org": 1,
	
	"fpmt.tw": 1,
	
	"fpmtmexico.org": 1,
	
	"fq.wikia.com": 1,
	
	"fqok.org": 1,
	
	"fqrouter.com": 1,
	
	"franklc.com": 1,
	
	"freakshare.com": 1,
	
	"free-gate.org": 1,
	
	"free-hada-now.org": 1,
	
	"free-proxy.cz": 1,
	
	"free-ssh.com": 1,
	
	"free.fr": 1,
	
	"free4u.com.ar": 1,
	
	"freealim.com": 1,
	
	"freebrowser.org": 1,
	
	"freechal.com": 1,
	
	"freechina.net": 1,
	
	"freeddns.com": 1,
	
	"freeddns.org": 1,
	
	"freedomchina.info": 1,
	
	"freedomcollection.org": 1,
	
	"freedomhouse.org": 1,
	
	"freedomsherald.org": 1,
	
	"freeforums.org": 1,
	
	"freefq.com": 1,
	
	"freefuckvids.com": 1,
	
	"freegao.com": 1,
	
	"freeilhamtohti.org": 1,
	
	"freekwonpyong.org": 1,
	
	"freelotto.com": 1,
	
	"freeman2.com": 1,
	
	"freemoren.com": 1,
	
	"freemorenews.com": 1,
	
	"freemuse.org": 1,
	
	"freenet-china.org": 1,
	
	"freenetproject.org": 1,
	
	"freenewscn.com": 1,
	
	"freeopenvpn.com": 1,
	
	"freeoz.org": 1,
	
	"freessh.us": 1,
	
	"freetcp.com": 1,
	
	"freetibet.net": 1,
	
	"freetibet.org": 1,
	
	"freetibetanheroes.org": 1,
	
	"freeviewmovies.com": 1,
	
	"freevpn.me": 1,
	
	"freevpn.nl": 1,
	
	"freewallpaper4.me": 1,
	
	"freewebs.com": 1,
	
	"freewechat.com": 1,
	
	"freeweibo.com": 1,
	
	"freewww.biz": 1,
	
	"freewww.info": 1,
	
	"freexinwen.com": 1,
	
	"freeyellow.com": 1,
	
	"freeyoutubeproxy.net": 1,
	
	"friendfeed-media.com": 1,
	
	"friendfeed.com": 1,
	
	"friends-of-tibet.org": 1,
	
	"friendsoftibet.org": 1,
	
	"fring.com": 1,
	
	"fringenetwork.com": 1,
	
	"from-pr.com": 1,
	
	"from-sd.com": 1,
	
	"fromchinatousa.net": 1,
	
	"frommel.net": 1,
	
	"frontlinedefenders.org": 1,
	
	"frootvpn.com": 1,
	
	"fscked.org": 1,
	
	"fsurf.com": 1,
	
	"ftchinese.com": 1,
	
	"ftp1.biz": 1,
	
	"ftpserver.biz": 1,
	
	"ftv.com.tw": 1,
	
	"fucd.com": 1,
	
	"fuckcnnic.net": 1,
	
	"fuckgfw.org": 1,
	
	"fullerconsideration.com": 1,
	
	"fulue.com": 1,
	
	"funf.tw": 1,
	
	"funkyimg.com": 1,
	
	"funp.com": 1,
	
	"fuq.com": 1,
	
	"furbo.org": 1,
	
	"furhhdl.org": 1,
	
	"furinkan.com": 1,
	
	"furl.net": 1,
	
	"futurechinaforum.org": 1,
	
	"futuremessage.org": 1,
	
	"fux.com": 1,
	
	"fuyin.net": 1,
	
	"fuyindiantai.org": 1,
	
	"fuyu.org.tw": 1,
	
	"fw.cm": 1,
	
	"fxnetworks.com": 1,
	
	"fzh999.com": 1,
	
	"fzh999.net": 1,
	
	"fzlm.com": 1,
	
	"g-area.org": 1,
	
	"g-queen.com": 1,
	
	"g.co": 1,
	
	"g.e-hentai.org": 1,
	
	"g6hentai.com": 1,
	
	"gabocorp.com": 1,
	
	"gaeproxy.com": 1,
	
	"gaforum.org": 1,
	
	"galaxymacau.com": 1,
	
	"galenwu.com": 1,
	
	"galstars.net": 1,
	
	"game735.com": 1,
	
	"gamebase.com.tw": 1,
	
	"gamejolt.com": 1,
	
	"gamer.com.tw": 1,
	
	"gamez.com.tw": 1,
	
	"gamousa.com": 1,
	
	"ganges.com": 1,
	
	"gaoming.net": 1,
	
	"gaopi.net": 1,
	
	"gaozhisheng.net": 1,
	
	"gaozhisheng.org": 1,
	
	"gardennetworks.com": 1,
	
	"gardennetworks.org": 1,
	
	"gartlive.com": 1,
	
	"gate-project.com": 1,
	
	"gather.com": 1,
	
	"gatherproxy.com": 1,
	
	"gati.org.tw": 1,
	
	"gaybubble.com": 1,
	
	"gaycn.net": 1,
	
	"gayhub.com": 1,
	
	"gaymap.cc": 1,
	
	"gaytube.com": 1,
	
	"gaywatch.com": 1,
	
	"gazotube.com": 1,
	
	"gcc.org.hk": 1,
	
	"gclooney.com": 1,
	
	"gcpnews.com": 1,
	
	"gcr.io": 1,
	
	"gdbt.net": 1,
	
	"gdzf.org": 1,
	
	"geek-art.net": 1,
	
	"geekerhome.com": 1,
	
	"geekheart.info": 1,
	
	"geekmanuals.com": 1,
	
	"gekikame.com": 1,
	
	"gelbooru.com": 1,
	
	"geocities.co.jp": 1,
	
	"geocities.com": 1,
	
	"geocities.jp": 1,
	
	"geohot.com": 1,
	
	"geometrictools.com": 1,
	
	"gerefoundation.org": 1,
	
	"get.how": 1,
	
	"getastrill.com": 1,
	
	"getchu.com": 1,
	
	"getcloak.com": 1,
	
	"getcloudapp.com": 1,
	
	"getfoxyproxy.org": 1,
	
	"getfreedur.com": 1,
	
	"getgom.com": 1,
	
	"geti2p.net": 1,
	
	"getiton.com": 1,
	
	"getjetso.com": 1,
	
	"getlantern.org": 1,
	
	"getmdl.io": 1,
	
	"getsmartlinks.com": 1,
	
	"getsocialscope.com": 1,
	
	"getsync.com": 1,
	
	"gettrials.com": 1,
	
	"gettyimages.com": 1,
	
	"getuploader.com": 1,
	
	"gfbv.de": 1,
	
	"gfgold.com.hk": 1,
	
	"gfsale.com": 1,
	
	"gfw.org.ua": 1,
	
	"gfw.press": 1,
	
	"ggpht.com": 1,
	
	"ggssl.com": 1,
	
	"ghost.org": 1,
	
	"ghostpath.com": 1,
	
	"ghut.org": 1,
	
	"giantessnight.com": 1,
	
	"gifree.com": 1,
	
	"giga-web.jp": 1,
	
	"gigporno.ru": 1,
	
	"girlbanker.com": 1,
	
	"gist.github.com": 1,
	
	"git.io": 1,
	
	"gizlen.net": 1,
	
	"gjczz.com": 1,
	
	"glass8.eu": 1,
	
	"global.bing.com": 1,
	
	"globaljihad.net": 1,
	
	"globalmediaoutreach.com": 1,
	
	"globalmuseumoncommunism.org": 1,
	
	"globalrescue.net": 1,
	
	"globaltm.org": 1,
	
	"globalvoicesonline.org": 1,
	
	"globalvpn.net": 1,
	
	"glock.com": 1,
	
	"gloryhole.com": 1,
	
	"gluckman.com": 1,
	
	"glype.com": 1,
	
	"gmail.com": 1,
	
	"gmbd.cn": 1,
	
	"gmhz.org": 1,
	
	"gmll.org": 1,
	
	"gmodules.com": 1,
	
	"gmozomg.izihost.org": 1,
	
	"gnci.org.hk": 1,
	
	"go-pki.com": 1,
	
	"go.nesnode.com": 1,
	
	"go141.com": 1,
	
	"goagent.biz": 1,
	
	"goagent.codeplex.com": 1,
	
	"goagentplus.com": 1,
	
	"gobet.cc": 1,
	
	"godfootsteps.org": 1,
	
	"godns.work": 1,
	
	"godoc.org": 1,
	
	"godsdirectcontact.co.uk": 1,
	
	"godsdirectcontact.org": 1,
	
	"godsdirectcontact.org.tw": 1,
	
	"godsimmediatecontact.com": 1,
	
	"gogotunnel.com": 1,
	
	"gohappy.com.tw": 1,
	
	"gojet.krtco.com.tw": 1,
	
	"gokbayrak.com": 1,
	
	"golang.org": 1,
	
	"goldbet.com": 1,
	
	"goldbetsports.com": 1,
	
	"goldeneyevault.com": 1,
	
	"goldenfrog.com": 1,
	
	"goldjizz.com": 1,
	
	"goldstep.net": 1,
	
	"goldwave.com": 1,
	
	"gongm.in": 1,
	
	"gongmeng.info": 1,
	
	"gongminliliang.com": 1,
	
	"gongwt.com": 1,
	
	"goo.gl": 1,
	
	"gooday.xyz": 1,
	
	"gooddns.info": 1,
	
	"goodreaders.com": 1,
	
	"goodreads.com": 1,
	
	"goodtv.com.tw": 1,
	
	"goodtv.tv": 1,
	
	"goofind.com": 1,
	
	"google.ae": 1,
	
	"google.am": 1,
	
	"google.as": 1,
	
	"google.at": 1,
	
	"google.az": 1,
	
	"google.ba": 1,
	
	"google.be": 1,
	
	"google.bg": 1,
	
	"google.ca": 1,
	
	"google.calstate.edu": 1,
	
	"google.cd": 1,
	
	"google.ci": 1,
	
	"google.co.id": 1,
	
	"google.co.in": 1,
	
	"google.co.jp": 1,
	
	"google.co.kr": 1,
	
	"google.co.ma": 1,
	
	"google.co.uk": 1,
	
	"google.com": 1,
	
	"google.de": 1,
	
	"google.dj": 1,
	
	"google.dk": 1,
	
	"google.es": 1,
	
	"google.fi": 1,
	
	"google.fm": 1,
	
	"google.fr": 1,
	
	"google.ga": 1,
	
	"google.gg": 1,
	
	"google.gl": 1,
	
	"google.gr": 1,
	
	"google.ie": 1,
	
	"google.is": 1,
	
	"google.it": 1,
	
	"google.jo": 1,
	
	"google.kz": 1,
	
	"google.lv": 1,
	
	"google.me": 1,
	
	"google.mn": 1,
	
	"google.ms": 1,
	
	"google.nl": 1,
	
	"google.no": 1,
	
	"google.nu": 1,
	
	"google.ro": 1,
	
	"google.ru": 1,
	
	"google.rw": 1,
	
	"google.sc": 1,
	
	"google.sh": 1,
	
	"google.sk": 1,
	
	"google.sm": 1,
	
	"google.sn": 1,
	
	"google.tk": 1,
	
	"google.tm": 1,
	
	"google.to": 1,
	
	"google.tt": 1,
	
	"google.vu": 1,
	
	"google.ws": 1,
	
	"googleapis.cn": 1,
	
	"googleapis.com": 1,
	
	"googleapps.com": 1,
	
	"googlearth.com": 1,
	
	"googleartproject.com": 1,
	
	"googleblog.com": 1,
	
	"googlebot.com": 1,
	
	"googlechinawebmaster.com": 1,
	
	"googlecode.com": 1,
	
	"googlecommerce.com": 1,
	
	"googledomains.com": 1,
	
	"googledrive.com": 1,
	
	"googleearth.com": 1,
	
	"googlegroups.com": 1,
	
	"googlehosted.com": 1,
	
	"googleideas.com": 1,
	
	"googleinsidesearch.com": 1,
	
	"googlelabs.com": 1,
	
	"googlemail.com": 1,
	
	"googlemashups.com": 1,
	
	"googlepagecreator.com": 1,
	
	"googleplay.com": 1,
	
	"googleplus.com": 1,
	
	"googlescholar.com": 1,
	
	"googlesile.com": 1,
	
	"googlesource.com": 1,
	
	"googlesyndication.com": 1,
	
	"googleusercontent.com": 1,
	
	"googlevideo.com": 1,
	
	"googleweblight.com": 1,
	
	"googlezip.net": 1,
	
	"gopetition.com": 1,
	
	"goproxing.net": 1,
	
	"gospelherald.com": 1,
	
	"got-game.org": 1,
	
	"gotdns.ch": 1,
	
	"gotgeeks.com": 1,
	
	"gotrusted.com": 1,
	
	"gotw.ca": 1,
	
	"gov.taipei": 1,
	
	"gov.tw": 1,
	
	"gr8domain.biz": 1,
	
	"gr8name.biz": 1,
	
	"grammaly.com": 1,
	
	"grandtrial.org": 1,
	
	"grangorz.org": 1,
	
	"graphis.ne.jp": 1,
	
	"graphql.org": 1,
	
	"graylog2.org": 1,
	
	"greasespot.net": 1,
	
	"great-firewall.com": 1,
	
	"great-roc.org": 1,
	
	"greatfire.org": 1,
	
	"greatfire.us7.list-manage.com": 1,
	
	"greatfirewall.biz": 1,
	
	"greatfirewallofchina.net": 1,
	
	"greatfirewallofchina.org": 1,
	
	"greatroc.org": 1,
	
	"greatroc.tw": 1,
	
	"greatzhonghua.org": 1,
	
	"greenfieldbookstore.com.hk": 1,
	
	"greenparty.org.tw": 1,
	
	"greenpeace.com.tw": 1,
	
	"greenpeace.org": 1,
	
	"greenreadings.com": 1,
	
	"greenvpn.net": 1,
	
	"greenvpn.org": 1,
	
	"groups.google.cn": 1,
	
	"gs-discuss.com": 1,
	
	"gstatic.com": 1,
	
	"gtricks.com": 1,
	
	"gts-vpn.com": 1,
	
	"gu-chu-sum.org": 1,
	
	"guaguass.com": 1,
	
	"guaguass.org": 1,
	
	"guancha.org": 1,
	
	"guangming.com.my": 1,
	
	"guardster.com": 1,
	
	"guishan.org": 1,
	
	"gumroad.com": 1,
	
	"gun-world.net": 1,
	
	"gunsamerica.com": 1,
	
	"gunsandammo.com": 1,
	
	"guruonline.hk": 1,
	
	"gutteruncensored.com": 1,
	
	"gvlib.com": 1,
	
	"gvm.com.tw": 1,
	
	"gvt0.com": 1,
	
	"gvt1.com": 1,
	
	"gvt3.com": 1,
	
	"gwtproject.org": 1,
	
	"gyalwarinpoche.com": 1,
	
	"gyatsostudio.com": 1,
	
	"gzm.tv": 1,
	
	"gzone-anime.info": 1,
	
	"h-china.org": 1,
	
	"h-moe.com": 1,
	
	"h1n1china.org": 1,
	
	"h528.com": 1,
	
	"h5dm.com": 1,
	
	"h5galgame.me": 1,
	
	"hacg.club": 1,
	
	"hacg.in": 1,
	
	"hacg.li": 1,
	
	"hacg.me": 1,
	
	"hacg.red": 1,
	
	"hacken.cc": 1,
	
	"hacker.org": 1,
	
	"hackthatphone.net": 1,
	
	"hahlo.com": 1,
	
	"hakkatv.org.tw": 1,
	
	"handcraftedsoftware.org": 1,
	
	"hanunyi.com": 1,
	
	"hao.news": 1,
	
	"haoel.github.io": 1,
	
	"happy-vpn.com": 1,
	
	"hardsextube.com": 1,
	
	"harunyahya.com": 1,
	
	"hasaowall.com": 1,
	
	"hautelook.com": 1,
	
	"hautelookcdn.com": 1,
	
	"have8.com": 1,
	
	"hclips.com": 1,
	
	"hd.stheadline.com": 1,
	
	"hdlt.me": 1,
	
	"hdtvb.net": 1,
	
	"hdzog.com": 1,
	
	"heartyit.com": 1,
	
	"hec.su": 1,
	
	"hecaitou.net": 1,
	
	"hechaji.com": 1,
	
	"heeact.edu.tw": 1,
	
	"hegre-art.com": 1,
	
	"heix.pp.ru": 1,
	
	"helloandroid.com": 1,
	
	"helloqueer.com": 1,
	
	"helloss.pw": 1,
	
	"hellotxt.com": 1,
	
	"hellouk.org": 1,
	
	"help.linksalpha.com": 1,
	
	"helpeachpeople.com": 1,
	
	"helplinfen.com": 1,
	
	"helpster.de": 1,
	
	"helpzhuling.org": 1,
	
	"hentai.to": 1,
	
	"hentaitube.tv": 1,
	
	"hentaivideoworld.com": 1,
	
	"heqinglian.net": 1,
	
	"heungkongdiscuss.com": 1,
	
	"hexieshe.com": 1,
	
	"hexxeh.net": 1,
	
	"heyzo.com": 1,
	
	"hgseav.com": 1,
	
	"hhdcb3office.org": 1,
	
	"hhthesakyatrizin.org": 1,
	
	"hi-on.org.tw": 1,
	
	"hidden-advent.org": 1,
	
	"hide.me": 1,
	
	"hidecloud.com": 1,
	
	"hidein.net": 1,
	
	"hideipvpn.com": 1,
	
	"hideman.net": 1,
	
	"hideme.nl": 1,
	
	"hidemy.name": 1,
	
	"hidemyass.com": 1,
	
	"hidemycomp.com": 1,
	
	"higfw.com": 1,
	
	"highpeakspureearth.com": 1,
	
	"highrockmedia.com": 1,
	
	"hihiforum.com": 1,
	
	"hihistory.net": 1,
	
	"hiitch.com": 1,
	
	"hikinggfw.org": 1,
	
	"hilive.tv": 1,
	
	"himalayan-foundation.org": 1,
	
	"himalayanglacier.com": 1,
	
	"himemix.com": 1,
	
	"himemix.net": 1,
	
	"hitomi.la": 1,
	
	"hiwifi.com": 1,
	
	"hizb-ut-tahrir.info": 1,
	
	"hizb-ut-tahrir.org": 1,
	
	"hizbuttahrir.org": 1,
	
	"hjclub.info": 1,
	
	"hk-pub.com": 1,
	
	"hk.frienddy.com": 1,
	
	"hk.geocities.com": 1,
	
	"hk.gradconnection.com": 1,
	
	"hk.hao123img.com": 1,
	
	"hk.jiepang.com": 1,
	
	"hk.knowledge.yahoo.com": 1,
	
	"hk.myblog.yahoo.com": 1,
	
	"hk.news.yahoo.com": 1,
	
	"hk.rd.yahoo.com": 1,
	
	"hk.search.yahoo.com": 1,
	
	"hk.video.news.yahoo.com": 1,
	
	"hk.yahoo.com": 1,
	
	"hk01.com": 1,
	
	"hk32168.com": 1,
	
	"hka8964.wordpress.com": 1,
	
	"hkacg.com": 1,
	
	"hkacg.net": 1,
	
	"hkanews.wordpress.com": 1,
	
	"hkatvnews.com": 1,
	
	"hkbc.net": 1,
	
	"hkbf.org": 1,
	
	"hkbookcity.com": 1,
	
	"hkchurch.org": 1,
	
	"hkci.org.hk": 1,
	
	"hkcmi.edu": 1,
	
	"hkcnews.com": 1,
	
	"hkcoc.com": 1,
	
	"hkcoc.weather.com.hk": 1,
	
	"hkdailynews.com.hk": 1,
	
	"hkday.net": 1,
	
	"hkdf.org": 1,
	
	"hkej.com": 1,
	
	"hkepc.com": 1,
	
	"hkfaa.com": 1,
	
	"hkfreezone.com": 1,
	
	"hkfront.org": 1,
	
	"hkgolden.com": 1,
	
	"hkgreenradio.org": 1,
	
	"hkheadline.com": 1,
	
	"hkhkhk.com": 1,
	
	"hkhrc.org.hk": 1,
	
	"hkhrm.org.hk": 1,
	
	"hkip.org.uk": 1,
	
	"hkjc.com": 1,
	
	"hkjp.org": 1,
	
	"hklft.com": 1,
	
	"hklts.org.hk": 1,
	
	"hkptu.org": 1,
	
	"hkreporter.com": 1,
	
	"hkreporter.loved.hk": 1,
	
	"hkupop.hku.hk": 1,
	
	"hkusu.net": 1,
	
	"hkvwet.com": 1,
	
	"hkwcc.org.hk": 1,
	
	"hkzone.org": 1,
	
	"hmonghot.com": 1,
	
	"hmvdigital.ca": 1,
	
	"hmvdigital.com": 1,
	
	"hnjhj.com": 1,
	
	"hnntube.com": 1,
	
	"hola.com": 1,
	
	"hola.org": 1,
	
	"holymountaincn.com": 1,
	
	"holyspiritspeaks.org": 1,
	
	"home.sina.com": 1,
	
	"home.so-net.net.tw": 1,
	
	"homedepot.com": 1,
	
	"homeperversion.com": 1,
	
	"homeservershow.com": 1,
	
	"hongkongfp.com": 1,
	
	"hongmeimei.com": 1,
	
	"hongzhi.li": 1,
	
	"hootsuite.com": 1,
	
	"hoovers.com": 1,
	
	"hopedialogue.org": 1,
	
	"hopto.org": 1,
	
	"hornygamer.com": 1,
	
	"hornytrip.com": 1,
	
	"hotav.tv": 1,
	
	"hotels.cn": 1,
	
	"hotfrog.com.tw": 1,
	
	"hotgoo.com": 1,
	
	"hotpornshow.com": 1,
	
	"hotpot.hk": 1,
	
	"hotshame.com": 1,
	
	"hotspotshield.com": 1,
	
	"hotvpn.com": 1,
	
	"hougaige.com": 1,
	
	"howtoforge.com": 1,
	
	"hpa.gov.tw": 1,
	
	"hqcdp.org": 1,
	
	"hqjapanesesex.com": 1,
	
	"hqmovies.com": 1,
	
	"hqsbonline.wordpress.com": 1,
	
	"hrcchina.org": 1,
	
	"hrcir.com": 1,
	
	"hrea.org": 1,
	
	"hrichina.org": 1,
	
	"hrw.org": 1,
	
	"hrweb.org": 1,
	
	"hsjp.net": 1,
	
	"hsselite.com": 1,
	
	"hst.net.tw": 1,
	
	"hstern.net": 1,
	
	"hstt.net": 1,
	
	"ht.ly": 1,
	
	"htkou.net": 1,
	
	"htl.li": 1,
	
	"html5rocks.com": 1,
	
	"htmldog.com": 1,
	
	"https443.net": 1,
	
	"https443.org": 1,
	
	"hua-yue.net": 1,
	
	"huaglad.com": 1,
	
	"huanghuagang.org": 1,
	
	"huangyiyu.com": 1,
	
	"huaren.us": 1,
	
	"huashangnews.com": 1,
	
	"huaxia-news.com": 1,
	
	"huaxiabao.org": 1,
	
	"huaxin.ph": 1,
	
	"huayuworld.org": 1,
	
	"hudatoriq.web.id": 1,
	
	"huffingtonpost.com": 1,
	
	"hugoroy.eu": 1,
	
	"huhaitai.com": 1,
	
	"huhamhire.com": 1,
	
	"huiyi.in": 1,
	
	"hulkshare.com": 1,
	
	"hulu.com": 1,
	
	"huluim.com": 1,
	
	"humanrightsbriefing.org": 1,
	
	"hung-ya.com": 1,
	
	"hungerstrikeforaids.org": 1,
	
	"huping.net": 1,
	
	"hurgokbayrak.com": 1,
	
	"hurriyet.com.tr": 1,
	
	"hustlercash.com": 1,
	
	"hut2.ru": 1,
	
	"hutianyi.net": 1,
	
	"hutong9.net": 1,
	
	"huyandex.com": 1,
	
	"hwayue.org.tw": 1,
	
	"hwinfo.com": 1,
	
	"hxwk.org": 1,
	
	"hxwq.org": 1,
	
	"hybrid-analysis.com": 1,
	
	"hyperrate.com": 1,
	
	"i-cable.com": 1,
	
	"i-part.com.tw": 1,
	
	"i-scmp.com": 1,
	
	"i.lithium.com": 1,
	
	"i1.hk": 1,
	
	"i2p2.de": 1,
	
	"i2runner.com": 1,
	
	"i818hk.com": 1,
	
	"iam.soy": 1,
	
	"iamtopone.com": 1,
	
	"iask.bz": 1,
	
	"iask.ca": 1,
	
	"iav19.com": 1,
	
	"ibiblio.org": 1,
	
	"iblist.com": 1,
	
	"iblogserv-f.net": 1,
	
	"ibros.org": 1,
	
	"ibvpn.com": 1,
	
	"icams.com": 1,
	
	"ice.audionow.com": 1,
	
	"icij.org": 1,
	
	"icl-fi.org": 1,
	
	"icoco.com": 1,
	
	"iconpaper.org": 1,
	
	"icu-project.org": 1,
	
	"id.hao123.com": 1,
	
	"iddddg.com": 1,
	
	"idemocracy.asia": 1,
	
	"identi.ca": 1,
	
	"idiomconnection.com": 1,
	
	"idouga.com": 1,
	
	"idreamx.com": 1,
	
	"idv.tw": 1,
	
	"ieasy5.com": 1,
	
	"ied2k.net": 1,
	
	"ienergy1.com": 1,
	
	"if.ttt": 1,
	
	"ifan.cz.cc": 1,
	
	"ifanqiang.com": 1,
	
	"ifcss.org": 1,
	
	"ifjc.org": 1,
	
	"ifreewares.com": 1,
	
	"ift.tt": 1,
	
	"igcd.net": 1,
	
	"igfw.net": 1,
	
	"igmg.de": 1,
	
	"ignitedetroit.net": 1,
	
	"igoogle.com": 1,
	
	"igotmail.com.tw": 1,
	
	"igvita.com": 1,
	
	"ihakka.net": 1,
	
	"ihao.org": 1,
	
	"iicns.com": 1,
	
	"ikstar.com": 1,
	
	"ikwb.com": 1,
	
	"illusionfactory.com": 1,
	
	"ilove80.be": 1,
	
	"ilovelongtoes.com": 1,
	
	"im.tv": 1,
	
	"im88.tw": 1,
	
	"imageab.com": 1,
	
	"imagefap.com": 1,
	
	"imageflea.com": 1,
	
	"images-gaytube.com": 1,
	
	"images.comico.tw": 1,
	
	"imageshack.us": 1,
	
	"imagevenue.com": 1,
	
	"imagezilla.net": 1,
	
	"imb.org": 1,
	
	"imdb.com": 1,
	
	"img.dlsite.jp": 1,
	
	"img.ly": 1,
	
	"imgchili.net": 1,
	
	"imgmega.com": 1,
	
	"imgur.com": 1,
	
	"imkev.com": 1,
	
	"imlive.com": 1,
	
	"immigration.gov.tw": 1,
	
	"immoral.jp": 1,
	
	"impact.org.au": 1,
	
	"impp.mn": 1,
	
	"in-disguise.com": 1,
	
	"in99.org": 1,
	
	"incapdns.net": 1,
	
	"incloak.com": 1,
	
	"incredibox.fr": 1,
	
	"indiandefensenews.in": 1,
	
	"indiemerch.com": 1,
	
	"info-graf.fr": 1,
	
	"initiativesforchina.org": 1,
	
	"inkui.com": 1,
	
	"inmediahk.net": 1,
	
	"innermongolia.org": 1,
	
	"inote.tw": 1,
	
	"insecam.org": 1,
	
	"insidevoa.com": 1,
	
	"instagram.com": 1,
	
	"instanthq.com": 1,
	
	"institut-tibetain.org": 1,
	
	"interfaceaddiction.com": 1,
	
	"internationalrivers.org": 1,
	
	"internet.org": 1,
	
	"internetdefenseleague.org": 1,
	
	"internetfreedom.org": 1,
	
	"internetpopculture.com": 1,
	
	"investigating.wordpress.com": 1,
	
	"inxian.com": 1,
	
	"iownyour.biz": 1,
	
	"iownyour.org": 1,
	
	"ipalter.com": 1,
	
	"ipfire.org": 1,
	
	"iphone4hongkong.com": 1,
	
	"iphonehacks.com": 1,
	
	"iphonetaiwan.org": 1,
	
	"iphonix.fr": 1,
	
	"ipicture.ru": 1,
	
	"ipjetable.net": 1,
	
	"ipobar.com": 1,
	
	"ipoock.com": 1,
	
	"iportal.me": 1,
	
	"ippotv.com": 1,
	
	"ipredator.se": 1,
	
	"iptv.com.tw": 1,
	
	"iptvbin.com": 1,
	
	"ipvanish.com": 1,
	
	"iredmail.org": 1,
	
	"ironbigfools.compython.net": 1,
	
	"ironicsoftware.com": 1,
	
	"ironpython.net": 1,
	
	"ironsocket.com": 1,
	
	"is-a-hunter.com": 1,
	
	"is.gd": 1,
	
	"isaacmao.com": 1,
	
	"isasecret.com": 1,
	
	"isgreat.org": 1,
	
	"islahhaber.net": 1,
	
	"islam.org.hk": 1,
	
	"islamawareness.net": 1,
	
	"islamhouse.com": 1,
	
	"islamicity.com": 1,
	
	"islamicpluralism.org": 1,
	
	"islamtoday.net": 1,
	
	"ismaelan.com": 1,
	
	"ismalltits.com": 1,
	
	"ismprofessional.net": 1,
	
	"isohunt.com": 1,
	
	"isoma.im": 1,
	
	"israbox.com": 1,
	
	"issuu.com": 1,
	
	"istars.co.nz": 1,
	
	"istiqlalhewer.com": 1,
	
	"istockphoto.com": 1,
	
	"isunaffairs.com": 1,
	
	"isuntv.com": 1,
	
	"itaboo.info": 1,
	
	"itaiwan.gov.tw": 1,
	
	"italiatibet.org": 1,
	
	"itasoftware.com": 1,
	
	"itemdb.com": 1,
	
	"ithelp.ithome.com.tw": 1,
	
	"its.caltech.edu": 1,
	
	"itsaol.com": 1,
	
	"itshidden.com": 1,
	
	"itsky.it": 1,
	
	"itweet.net": 1,
	
	"iu45.com": 1,
	
	"iuhrdf.org": 1,
	
	"iuksky.com": 1,
	
	"ivacy.com": 1,
	
	"iverycd.com": 1,
	
	"ivpn.net": 1,
	
	"ixquick.com": 1,
	
	"ixxx.com": 1,
	
	"iyouport.com": 1,
	
	"izaobao.us": 1,
	
	"izles.net": 1,
	
	"izlesem.org": 1,
	
	"j.mp": 1,
	
	"jamaat.org": 1,
	
	"jamyangnorbu.com": 1,
	
	"jandyx.com": 1,
	
	"janwongphoto.com": 1,
	
	"japan-whores.com": 1,
	
	"japanfirst.asianfreeforum.com": 1,
	
	"jav101.com": 1,
	
	"jav2be.com": 1,
	
	"jav68.tv": 1,
	
	"javakiba.org": 1,
	
	"javbus.com": 1,
	
	"javfor.me": 1,
	
	"javhd.com": 1,
	
	"javhip.com": 1,
	
	"javhub.net": 1,
	
	"javhuge.com": 1,
	
	"javlibrary.com": 1,
	
	"javmobile.net": 1,
	
	"javmoo.com": 1,
	
	"javmoo.xyz": 1,
	
	"javseen.com": 1,
	
	"javtag.com": 1,
	
	"javzoo.com": 1,
	
	"jbtalks.cc": 1,
	
	"jbtalks.com": 1,
	
	"jbtalks.my": 1,
	
	"jcpenney.com": 1,
	
	"jdwsy.com": 1,
	
	"jeanyim.com": 1,
	
	"jetos.com": 1,
	
	"jfqu36.club": 1,
	
	"jfqu37.xyz": 1,
	
	"jgoodies.com": 1,
	
	"jiangweiping.com": 1,
	
	"jiaoyou8.com": 1,
	
	"jiehua.cz": 1,
	
	"jieshibaobao.com": 1,
	
	"jigglegifs.com": 1,
	
	"jigong1024.com": 1,
	
	"jihadintel.meforum.org": 1,
	
	"jihadology.net": 1,
	
	"jiji.com": 1,
	
	"jims.net": 1,
	
	"jinbushe.org": 1,
	
	"jingpin.org": 1,
	
	"jingsim.org": 1,
	
	"jinpianwang.com": 1,
	
	"jinroukong.com": 1,
	
	"jitouch.com": 1,
	
	"jizzthis.com": 1,
	
	"jjgirls.com": 1,
	
	"jkb.cc": 1,
	
	"jkforum.net": 1,
	
	"jkub.com": 1,
	
	"jma.go.jp": 1,
	
	"jmscult.com": 1,
	
	"joachims.org": 1,
	
	"jobnewera.wordpress.com": 1,
	
	"jobso.tv": 1,
	
	"joeedelman.com": 1,
	
	"journalchretien.net": 1,
	
	"journalofdemocracy.org": 1,
	
	"joymiihub.com": 1,
	
	"joyourself.com": 1,
	
	"jp.hao123.com": 1,
	
	"jpl.nasa.gov": 1,
	
	"jpopforum.net": 1,
	
	"jubushoushen.com": 1,
	
	"juhuaren.com": 1,
	
	"jukujo-club.com": 1,
	
	"juliepost.com": 1,
	
	"juliereyc.com": 1,
	
	"junauza.com": 1,
	
	"june4commemoration.org": 1,
	
	"junefourth-20.net": 1,
	
	"jungleheart.com": 1,
	
	"juoaa.com": 1,
	
	"justdied.com": 1,
	
	"justfreevpn.com": 1,
	
	"justicefortenzin.org": 1,
	
	"justpaste.it": 1,
	
	"justtristan.com": 1,
	
	"juyuange.org": 1,
	
	"juziyue.com": 1,
	
	"jwmusic.org": 1,
	
	"jyxf.net": 1,
	
	"k-doujin.net": 1,
	
	"ka-wai.com": 1,
	
	"kagyu.org": 1,
	
	"kagyu.org.za": 1,
	
	"kagyumonlam.org": 1,
	
	"kagyunews.com.hk": 1,
	
	"kagyuoffice.org": 1,
	
	"kagyuoffice.org.tw": 1,
	
	"kaiyuan.de": 1,
	
	"kakao.com": 1,
	
	"kalachakralugano.org": 1,
	
	"kankan.today": 1,
	
	"kannewyork.com": 1,
	
	"kanshifang.com": 1,
	
	"kantie.org": 1,
	
	"kanzhongguo.com": 1,
	
	"kanzhongguo.eu": 1,
	
	"kaotic.com": 1,
	
	"karayou.com": 1,
	
	"karkhung.com": 1,
	
	"karmapa-teachings.org": 1,
	
	"karmapa.org": 1,
	
	"kawaiikawaii.jp": 1,
	
	"kb.monitorware.com": 1,
	
	"kba-tx.org": 1,
	
	"kcoolonline.com": 1,
	
	"kcsoftwares.com": 1,
	
	"kebrum.com": 1,
	
	"kechara.com": 1,
	
	"keepandshare.com": 1,
	
	"keezmovies.com": 1,
	
	"kendatire.com": 1,
	
	"kendincos.net": 1,
	
	"kenengba.com": 1,
	
	"keontech.net": 1,
	
	"kepard.com": 1,
	
	"keycdn.com": 1,
	
	"khabdha.org": 1,
	
	"khatrimaza.org": 1,
	
	"khmusic.com.tw": 1,
	
	"kichiku-doujinko.com": 1,
	
	"kik.com": 1,
	
	"killwall.com": 1,
	
	"kindleren.com": 1,
	
	"kineox.free.fr": 1,
	
	"kingdomsalvation.org": 1,
	
	"kinghost.com": 1,
	
	"kingstone.com.tw": 1,
	
	"kink.com": 1,
	
	"kinmen.org.tw": 1,
	
	"kinmen.travel": 1,
	
	"kir.jp": 1,
	
	"kissbbao.cn": 1,
	
	"kiwi.kz": 1,
	
	"kk-whys.co.jp": 1,
	
	"kkbox.com": 1,
	
	"kmuh.org.tw": 1,
	
	"knowledgerush.com": 1,
	
	"kobo.com": 1,
	
	"kobobooks.com": 1,
	
	"kodingen.com": 1,
	
	"kompozer.net": 1,
	
	"konachan.com": 1,
	
	"kone.com": 1,
	
	"koolsolutions.com": 1,
	
	"koornk.com": 1,
	
	"koranmandarin.com": 1,
	
	"korenan2.com": 1,
	
	"ksdl.org": 1,
	
	"ksnews.com.tw": 1,
	
	"ktzhk.com": 1,
	
	"kui.name": 1,
	
	"kun.im": 1,
	
	"kurashsultan.com": 1,
	
	"kurtmunger.com": 1,
	
	"kusocity.com": 1,
	
	"kwcg.ca": 1,
	
	"kwongwah.com.my": 1,
	
	"kxsw.life": 1,
	
	"kyofun.com": 1,
	
	"kyohk.net": 1,
	
	"kyoyue.com": 1,
	
	"kyzyhello.com": 1,
	
	"kzeng.info": 1,
	
	"la-forum.org": 1,
	
	"labiennale.org": 1,
	
	"ladbrokes.com": 1,
	
	"lagranepoca.com": 1,
	
	"lalulalu.com": 1,
	
	"lama.com.tw": 1,
	
	"lamayeshe.com": 1,
	
	"lamnia.co.uk": 1,
	
	"lamrim.com": 1,
	
	"lanterncn.cn": 1,
	
	"lantosfoundation.org": 1,
	
	"laod.cn": 1,
	
	"laogai.org": 1,
	
	"laomiu.com": 1,
	
	"laoyang.info": 1,
	
	"laptoplockdown.com": 1,
	
	"laqingdan.net": 1,
	
	"larsgeorge.com": 1,
	
	"lastcombat.com": 1,
	
	"lastfm.es": 1,
	
	"latelinenews.com": 1,
	
	"latibet.org": 1,
	
	"ld.hao123img.com": 1,
	
	"le-vpn.com": 1,
	
	"leafyvpn.net": 1,
	
	"leeao.com.cn": 1,
	
	"lefora.com": 1,
	
	"left21.hk": 1,
	
	"legalporno.com": 1,
	
	"legaltech.law.com": 1,
	
	"legsjapan.com": 1,
	
	"leirentv.ca": 1,
	
	"leisurecafe.ca": 1,
	
	"leisurepro.com": 1,
	
	"lematin.ch": 1,
	
	"lemonde.fr": 1,
	
	"lenwhite.com": 1,
	
	"lerosua.org": 1,
	
	"lers.google": 1,
	
	"lesoir.be": 1,
	
	"letou.com": 1,
	
	"letscorp.net": 1,
	
	"lflink.com": 1,
	
	"lflinkup.com": 1,
	
	"lflinkup.net": 1,
	
	"lflinkup.org": 1,
	
	"lhakar.org": 1,
	
	"lhasocialwork.org": 1,
	
	"liangyou.net": 1,
	
	"lianyue.net": 1,
	
	"liaowangxizang.net": 1,
	
	"liberal.org.hk": 1,
	
	"libertytimes.com.tw": 1,
	
	"library.usc.cuhk.edu.hk": 1,
	
	"lidecheng.com": 1,
	
	"lifemiles.com": 1,
	
	"lighten.org.tw": 1,
	
	"lightnovel.cn": 1,
	
	"like.com": 1,
	
	"limiao.net": 1,
	
	"line-apps.com": 1,
	
	"line-scdn.net": 1,
	
	"line.me": 1,
	
	"line.naver.jp": 1,
	
	"linglingfa.com": 1,
	
	"lingvodics.com": 1,
	
	"link-o-rama.com": 1,
	
	"linkideo.com": 1,
	
	"linkuswell.com": 1,
	
	"linux.org.hk": 1,
	
	"linuxtoy.org": 1,
	
	"lionsroar.com": 1,
	
	"lipuman.com": 1,
	
	"liquidvpn.com": 1,
	
	"listentoyoutube.com": 1,
	
	"listorious.com": 1,
	
	"lists.w3.org": 1,
	
	"liudejun.com": 1,
	
	"liuhanyu.com": 1,
	
	"liujianshu.com": 1,
	
	"liuxiaobo.net": 1,
	
	"liuxiaotong.com": 1,
	
	"livedoor.jp": 1,
	
	"liveleak.com": 1,
	
	"livestation.com": 1,
	
	"livestream.com": 1,
	
	"livevideo.com": 1,
	
	"livingonline.us": 1,
	
	"livingstream.com": 1,
	
	"liwangyang.com": 1,
	
	"lizhizhuangbi.com": 1,
	
	"lkcn.net": 1,
	
	"llss.me": 1,
	
	"load.to": 1,
	
	"lobsangwangyal.com": 1,
	
	"localdomain.ws": 1,
	
	"localpresshk.com": 1,
	
	"lockdown.com": 1,
	
	"lockestek.com": 1,
	
	"lofi.e-hentai.org": 1,
	
	"logbot.net": 1,
	
	"logiqx.com": 1,
	
	"logmike.com": 1,
	
	"londonchinese.ca": 1,
	
	"longhair.hk": 1,
	
	"longmusic.com": 1,
	
	"longtermly.net": 1,
	
	"longtoes.com": 1,
	
	"lookingglasstheatre.org": 1,
	
	"lookpic.com": 1,
	
	"looktoronto.com": 1,
	
	"lotsawahouse.org": 1,
	
	"lotuslight.org.hk": 1,
	
	"lotuslight.org.tw": 1,
	
	"lovetvshow.com": 1,
	
	"lpsg.com": 1,
	
	"lrfz.com": 1,
	
	"lrip.org": 1,
	
	"lsd.org.hk": 1,
	
	"lsforum.net": 1,
	
	"lsm.org": 1,
	
	"lsmchinese.org": 1,
	
	"lsmkorean.org": 1,
	
	"lsmradio.com": 1,
	
	"lsmwebcast.com": 1,
	
	"lsxszzg.com": 1,
	
	"ltn.com.tw": 1,
	
	"luke54.com": 1,
	
	"luke54.org": 1,
	
	"lupm.org": 1,
	
	"lushstories.com": 1,
	
	"luxebc.com": 1,
	
	"lvhai.org": 1,
	
	"lvv2.com": 1,
	
	"lyfhk.net": 1,
	
	"lzmtnews.org": 1,
	
	"m-team.cc": 1,
	
	"m.hkgalden.com": 1,
	
	"m.me": 1,
	
	"m.plixi.com": 1,
	
	"m.slandr.net": 1,
	
	"ma.hao123.com": 1,
	
	"macgamestore.com": 1,
	
	"macrovpn.com": 1,
	
	"macts.com.tw": 1,
	
	"mad-ar.ch": 1,
	
	"madewithcode.com": 1,
	
	"madonna-av.com": 1,
	
	"madthumbs.com": 1,
	
	"magazines.sina.com.tw": 1,
	
	"magic-net.info": 1,
	
	"mahabodhi.org": 1,
	
	"maiio.net": 1,
	
	"mail-archive.com": 1,
	
	"maildns.xyz": 1,
	
	"maiplus.com": 1,
	
	"maizhong.org": 1,
	
	"makemymood.com": 1,
	
	"makkahnewspaper.com": 1,
	
	"makzhou.warehouse333.com": 1,
	
	"malaysiakini.com": 1,
	
	"mamingzhe.com": 1,
	
	"mangafox.com": 1,
	
	"mangafox.me": 1,
	
	"maniash.com": 1,
	
	"manicur4ik.ru": 1,
	
	"mansion.com": 1,
	
	"mansionpoker.com": 1,
	
	"manta.com": 1,
	
	"maplew.com": 1,
	
	"marc.info": 1,
	
	"marguerite.su": 1,
	
	"martau.com": 1,
	
	"martincartoons.com": 1,
	
	"martsangkagyuofficial.org": 1,
	
	"maruta.be": 1,
	
	"marxist.com": 1,
	
	"marxist.net": 1,
	
	"marxists.org": 1,
	
	"mash.to": 1,
	
	"maskedip.com": 1,
	
	"matainja.com": 1,
	
	"material.io": 1,
	
	"mathable.io": 1,
	
	"mathiew-badimon.com": 1,
	
	"matome-plus.com": 1,
	
	"matome-plus.net": 1,
	
	"matsushimakaede.com": 1,
	
	"mattwilcox.net": 1,
	
	"maturejp.com": 1,
	
	"maxing.jp": 1,
	
	"mayimayi.com": 1,
	
	"mcadforums.com": 1,
	
	"mcaf.ee": 1,
	
	"mcfog.com": 1,
	
	"mcreasite.com": 1,
	
	"md-t.org": 1,
	
	"me.youthwant.com.tw": 1,
	
	"meansys.com": 1,
	
	"media.nu.nl": 1,
	
	"media.org.hk": 1,
	
	"mediachinese.com": 1,
	
	"mediafire.com": 1,
	
	"mediafreakcity.com": 1,
	
	"medium.com": 1,
	
	"meetav.com": 1,
	
	"meetup.com": 1,
	
	"mefeedia.com": 1,
	
	"mefound.com": 1,
	
	"mega.nz": 1,
	
	"megaproxy.com": 1,
	
	"megarotic.com": 1,
	
	"megavideo.com": 1,
	
	"megurineluka.com": 1,
	
	"meirixiaochao.com": 1,
	
	"melon-peach.com": 1,
	
	"meltoday.com": 1,
	
	"meme.yahoo.com": 1,
	
	"memehk.com": 1,
	
	"memorybbs.com": 1,
	
	"memri.org": 1,
	
	"memrijttm.org": 1,
	
	"mercyprophet.org": 1,
	
	"meridian-trust.org": 1,
	
	"meripet.biz": 1,
	
	"meripet.com": 1,
	
	"merit-times.com.tw": 1,
	
	"meshrep.com": 1,
	
	"mesotw.com": 1,
	
	"messenger.com": 1,
	
	"metacafe.com": 1,
	
	"metarthunter.com": 1,
	
	"meteorshowersonline.com": 1,
	
	"metrohk.com.hk": 1,
	
	"metrolife.ca": 1,
	
	"metroradio.com.hk": 1,
	
	"meyou.jp": 1,
	
	"meyul.com": 1,
	
	"mfxmedia.com": 1,
	
	"mgoon.com": 1,
	
	"mgstage.com": 1,
	
	"mh4u.org": 1,
	
	"mhradio.org": 1,
	
	"michaelanti.com": 1,
	
	"michaelmarketl.com": 1,
	
	"microvpn.com": 1,
	
	"middle-way.net": 1,
	
	"mihk.hk": 1,
	
	"mihr.com": 1,
	
	"mihua.org": 1,
	
	"mike.cz.cc": 1,
	
	"mikesoltys.com": 1,
	
	"milph.net": 1,
	
	"milsurps.com": 1,
	
	"mimiai.net": 1,
	
	"mimivip.com": 1,
	
	"mimivv.com": 1,
	
	"mindrolling.org": 1,
	
	"minghui-a.org": 1,
	
	"minghui-b.org": 1,
	
	"minghui-school.org": 1,
	
	"minghui.or.kr": 1,
	
	"minghui.org": 1,
	
	"mingjinglishi.com": 1,
	
	"mingjingnews.com": 1,
	
	"mingjingtimes.com": 1,
	
	"mingpao.com": 1,
	
	"mingpaocanada.com": 1,
	
	"mingpaomonthly.com": 1,
	
	"mingpaonews.com": 1,
	
	"mingpaony.com": 1,
	
	"mingpaosf.com": 1,
	
	"mingpaotor.com": 1,
	
	"mingpaovan.com": 1,
	
	"mingshengbao.com": 1,
	
	"minhhue.net": 1,
	
	"miniforum.org": 1,
	
	"ministrybooks.org": 1,
	
	"minzhuhua.net": 1,
	
	"minzhuzhanxian.com": 1,
	
	"minzhuzhongguo.org": 1,
	
	"miroguide.com": 1,
	
	"mirrorbooks.com": 1,
	
	"mitao.com.tw": 1,
	
	"mitbbs.com": 1,
	
	"mixero.com": 1,
	
	"mixpod.com": 1,
	
	"mixx.com": 1,
	
	"mizzmona.com": 1,
	
	"mjib.gov.tw": 1,
	
	"mjlsh.usc.cuhk.edu.hk": 1,
	
	"mk5000.com": 1,
	
	"mlcool.com": 1,
	
	"mmaaxx.com": 1,
	
	"mmmca.com": 1,
	
	"mnewstv.com": 1,
	
	"mo.nightlife141.com": 1,
	
	"mobatek.net": 1,
	
	"mobile01.com": 1,
	
	"mobileways.de": 1,
	
	"moby.to": 1,
	
	"mobypicture.com": 1,
	
	"moeaic.gov.tw": 1,
	
	"moeerolibrary.com": 1,
	
	"mofaxiehui.com": 1,
	
	"mofos.com": 1,
	
	"mog.com": 1,
	
	"mol.gov.tw": 1,
	
	"molihua.org": 1,
	
	"mondex.org": 1,
	
	"money-link.com.tw": 1,
	
	"moneyhome.biz": 1,
	
	"monitorchina.org": 1,
	
	"monster.com": 1,
	
	"moodyz.com": 1,
	
	"moonbbs.com": 1,
	
	"morningsun.org": 1,
	
	"moroneta.com": 1,
	
	"mos.ru": 1,
	
	"motherless.com": 1,
	
	"motor4ik.ru": 1,
	
	"mousebreaker.com": 1,
	
	"movements.org": 1,
	
	"moviefap.com": 1,
	
	"mp3buscador.com": 1,
	
	"mp3ye.eu": 1,
	
	"mpettis.com": 1,
	
	"mpfinance.com": 1,
	
	"mpinews.com": 1,
	
	"mponline.hk": 1,
	
	"mqxd.org": 1,
	
	"mrbasic.com": 1,
	
	"mrbonus.com": 1,
	
	"mrface.com": 1,
	
	"mrslove.com": 1,
	
	"mrtweet.com": 1,
	
	"msguancha.com": 1,
	
	"msha.gov": 1,
	
	"mswe1.org": 1,
	
	"mthruf.com": 1,
	
	"mtw.tl": 1,
	
	"muchosucko.com": 1,
	
	"mullvad.net": 1,
	
	"multiply.com": 1,
	
	"multiproxy.org": 1,
	
	"multiupload.com": 1,
	
	"mummysgold.com": 1,
	
	"murmur.tw": 1,
	
	"musicade.net": 1,
	
	"muslimvideo.com": 1,
	
	"muzi.com": 1,
	
	"muzi.net": 1,
	
	"muzu.tv": 1,
	
	"mvdis.gov.tw": 1,
	
	"mvg.jp": 1,
	
	"mx.hao123.com": 1,
	
	"mx981.com": 1,
	
	"my-formosa.com": 1,
	
	"my-private-network.co.uk": 1,
	
	"my-proxy.com": 1,
	
	"my.mail.ru": 1,
	
	"my.opera.com": 1,
	
	"my03.com": 1,
	
	"myactimes.com": 1,
	
	"myanniu.com": 1,
	
	"myaudiocast.com": 1,
	
	"myav.com.tw": 1,
	
	"mybbs.us": 1,
	
	"mybet.com": 1,
	
	"myca168.com": 1,
	
	"mycanadanow.com": 1,
	
	"mychinamyhome.com": 1,
	
	"mychinanet.com": 1,
	
	"mychinanews.com": 1,
	
	"mychinese.news": 1,
	
	"mycnnews.com": 1,
	
	"mycould.com": 1,
	
	"mydad.info": 1,
	
	"myddns.com": 1,
	
	"myeasytv.com": 1,
	
	"myeclipseide.com": 1,
	
	"myforum.com.hk": 1,
	
	"myforum.com.uk": 1,
	
	"myfreecams.com": 1,
	
	"myfreepaysite.com": 1,
	
	"myfreshnet.com": 1,
	
	"myftp.info": 1,
	
	"myftp.name": 1,
	
	"myiphide.com": 1,
	
	"mykomica.org": 1,
	
	"mylftv.com": 1,
	
	"mymediarom.com": 1,
	
	"mymoe.moe": 1,
	
	"mymom.info": 1,
	
	"mymusic.net.tw": 1,
	
	"mynetav.net": 1,
	
	"mynetav.org": 1,
	
	"mynumber.org": 1,
	
	"myparagliding.com": 1,
	
	"mypicture.info": 1,
	
	"mypop3.net": 1,
	
	"mypop3.org": 1,
	
	"mypopescu.com": 1,
	
	"myradio.hk": 1,
	
	"mysecondarydns.com": 1,
	
	"myshare.url.com.tw": 1,
	
	"mysinablog.com": 1,
	
	"mysite.verizon.net": 1,
	
	"myspace.com": 1,
	
	"mytalkbox.com": 1,
	
	"mytizi.com": 1,
	
	"mywww.biz": 1,
	
	"myz.info": 1,
	
	"naacoalition.org": 1,
	
	"naitik.net": 1,
	
	"nakido.com": 1,
	
	"nakuz.com": 1,
	
	"nalandabodhi.org": 1,
	
	"nalandawest.org": 1,
	
	"namgyal.org": 1,
	
	"namgyalmonastery.org": 1,
	
	"namsisi.com": 1,
	
	"nanyang.com": 1,
	
	"nanyangpost.com": 1,
	
	"nanzao.com": 1,
	
	"naol.ca": 1,
	
	"naol.cc": 1,
	
	"nat.gov.tw": 1,
	
	"nat.moe": 1,
	
	"national-lottery.co.uk": 1,
	
	"nationsonline.org": 1,
	
	"nationwide.com": 1,
	
	"naughtyamerica.com": 1,
	
	"navyfamily.navy.mil": 1,
	
	"navyreserve.navy.mil": 1,
	
	"naweeklytimes.com": 1,
	
	"nbtvpn.com": 1,
	
	"nccwatch.org.tw": 1,
	
	"nch.com.tw": 1,
	
	"ncn.org": 1,
	
	"nde.de": 1,
	
	"ndr.de": 1,
	
	"ned.org": 1,
	
	"nekoslovakia.net": 1,
	
	"nemesis2.qx.net": 1,
	
	"neo-miracle.com": 1,
	
	"nepusoku.com": 1,
	
	"net-fits.pro": 1,
	
	"netbirds.com": 1,
	
	"netcolony.com": 1,
	
	"netflix.com": 1,
	
	"netme.cc": 1,
	
	"netsneak.com": 1,
	
	"network54.com": 1,
	
	"networkedblogs.com": 1,
	
	"networktunnel.net": 1,
	
	"neverforget8964.org": 1,
	
	"new-3lunch.net": 1,
	
	"new-akiba.com": 1,
	
	"new96.ca": 1,
	
	"newcenturymc.com": 1,
	
	"newcenturynews.com": 1,
	
	"newchen.com": 1,
	
	"newgrounds.com": 1,
	
	"newipnow.com": 1,
	
	"newlandmagazine.com.au": 1,
	
	"newnews.ca": 1,
	
	"news.bbc.co.uk": 1,
	
	"news.cnyes.com": 1,
	
	"news.hk.msn.com": 1,
	
	"news.hkpeanut.com": 1,
	
	"news.msn.com.tw": 1,
	
	"news.nationalgeographic.com": 1,
	
	"news.now.com": 1,
	
	"news.omy.sg": 1,
	
	"news.seehua.com": 1,
	
	"news.sina.com.hk": 1,
	
	"news.sina.com.tw": 1,
	
	"news.sinchew.com.my": 1,
	
	"news.singtao.ca": 1,
	
	"news.tvb.com": 1,
	
	"news.tvbs.com.tw": 1,
	
	"news.yahoo.com": 1,
	
	"news100.com.tw": 1,
	
	"newsancai.com": 1,
	
	"newschinacomment.org": 1,
	
	"newscn.org": 1,
	
	"newsdetox.ca": 1,
	
	"newsdh.com": 1,
	
	"newsforums.bbc.co.uk": 1,
	
	"newspeak.cc": 1,
	
	"newstamago.com": 1,
	
	"newstapa.org": 1,
	
	"newstarnet.com": 1,
	
	"newtaiwan.com.tw": 1,
	
	"newtalk.tw": 1,
	
	"newyorktimes.com": 1,
	
	"nexon.com": 1,
	
	"next11.co.jp": 1,
	
	"nextmag.com.tw": 1,
	
	"nextmedia.com": 1,
	
	"nexton-net.jp": 1,
	
	"nexttv.com.tw": 1,
	
	"nf.id.au": 1,
	
	"nfjtyd.com": 1,
	
	"nflxext.com": 1,
	
	"nflximg.com": 1,
	
	"nflximg.net": 1,
	
	"nflxso.net": 1,
	
	"nflxvideo.net": 1,
	
	"nga.mil": 1,
	
	"ngensis.com": 1,
	
	"nhentai.net": 1,
	
	"nhi.gov.tw": 1,
	
	"nhk-ondemand.jp": 1,
	
	"nic.cz.cc": 1,
	
	"nic.google": 1,
	
	"nic.gov": 1,
	
	"nicovideo.jp": 1,
	
	"nighost.org": 1,
	
	"nikkei.com": 1,
	
	"ninecommentaries.com": 1,
	
	"ninjacloak.com": 1,
	
	"ninjaproxy.ninja": 1,
	
	"nintendium.com": 1,
	
	"ninth.biz": 1,
	
	"niusnews.com": 1,
	
	"njactb.org": 1,
	
	"njuice.com": 1,
	
	"nko.navy.mil": 1,
	
	"nlfreevpn.com": 1,
	
	"no-ip.org": 1,
	
	"nobel.se": 1,
	
	"nobelprize.org": 1,
	
	"nobodycanstop.us": 1,
	
	"nokogiri.org": 1,
	
	"nokola.com": 1,
	
	"noodlevpn.com": 1,
	
	"norbulingka.org": 1,
	
	"nordstrom.com": 1,
	
	"nordstromimage.com": 1,
	
	"nordstromrack.com": 1,
	
	"nordvpn.com": 1,
	
	"nottinghampost.com": 1,
	
	"novelasia.com": 1,
	
	"now.im": 1,
	
	"nownews.com": 1,
	
	"nowtorrents.com": 1,
	
	"noypf.com": 1,
	
	"npa.go.jp": 1,
	
	"npa.gov.tw": 1,
	
	"npnt.me": 1,
	
	"nps.gov": 1,
	
	"nradio.me": 1,
	
	"nrk.no": 1,
	
	"ns01.biz": 1,
	
	"ns01.info": 1,
	
	"ns01.us": 1,
	
	"ns02.biz": 1,
	
	"ns02.info": 1,
	
	"ns02.us": 1,
	
	"ns1.name": 1,
	
	"ns2.name": 1,
	
	"ns3.name": 1,
	
	"nsc.gov.tw": 1,
	
	"ntbk.gov.tw": 1,
	
	"ntbna.gov.tw": 1,
	
	"ntbt.gov.tw": 1,
	
	"ntd.tv": 1,
	
	"ntdtv.ca": 1,
	
	"ntdtv.co.kr": 1,
	
	"ntdtv.com": 1,
	
	"ntdtv.cz": 1,
	
	"ntdtv.org": 1,
	
	"ntdtv.ru": 1,
	
	"ntdtvla.com": 1,
	
	"ntrfun.com": 1,
	
	"ntsna.gov.tw": 1,
	
	"nubiles.net": 1,
	
	"nuexpo.com": 1,
	
	"nukistream.com": 1,
	
	"nurgo-software.com": 1,
	
	"nusatrip.com": 1,
	
	"nutaku.net": 1,
	
	"nuuvem.com": 1,
	
	"nuvid.com": 1,
	
	"nuzcom.com": 1,
	
	"nvdst.com": 1,
	
	"nvquan.org": 1,
	
	"nvtongzhisheng.org": 1,
	
	"nwtca.org": 1,
	
	"ny.stgloballink.com": 1,
	
	"ny.visiontimes.com": 1,
	
	"nyaa.eu": 1,
	
	"nyaa.si": 1,
	
	"nydus.ca": 1,
	
	"nylon-angel.com": 1,
	
	"nylonstockingsonline.com": 1,
	
	"nyt.com": 1,
	
	"nytchina.com": 1,
	
	"nytcn.me": 1,
	
	"nytco.com": 1,
	
	"nyti.ms": 1,
	
	"nytimes.com": 1,
	
	"nytimes.map.fastly.net": 1,
	
	"nytimg.com": 1,
	
	"nytstyle.com": 1,
	
	"nzchinese.com": 1,
	
	"nzchinese.net.nz": 1,
	
	"observechina.net": 1,
	
	"obutu.com": 1,
	
	"ocaspro.com": 1,
	
	"occupytiananmen.com": 1,
	
	"oclp.hk": 1,
	
	"ocreampies.com": 1,
	
	"ocry.com": 1,
	
	"october-review.org": 1,
	
	"oculus.com": 1,
	
	"oculuscdn.com": 1,
	
	"offbeatchina.com": 1,
	
	"officeoftibet.com": 1,
	
	"ofile.org": 1,
	
	"ogaoga.org": 1,
	
	"ogate.org": 1,
	
	"oikos.com.tw": 1,
	
	"oiktv.com": 1,
	
	"oizoblog.com": 1,
	
	"ok.ru": 1,
	
	"okayfreedom.com": 1,
	
	"okk.tw": 1,
	
	"old-cat.net": 1,
	
	"old.honeynet.org": 1,
	
	"old.nabble.com": 1,
	
	"olumpo.com": 1,
	
	"olympicwatch.org": 1,
	
	"omgili.com": 1,
	
	"omni7.jp": 1,
	
	"omnitalk.com": 1,
	
	"omnitalk.org": 1,
	
	"on.cc": 1,
	
	"on2.com": 1,
	
	"onapp.com": 1,
	
	"onedrive.live.com": 1,
	
	"onedumb.com": 1,
	
	"onion.city": 1,
	
	"online.recoveryversion.org": 1,
	
	"onlinecha.com": 1,
	
	"onlineyoutube.com": 1,
	
	"onmoon.com": 1,
	
	"onmoon.net": 1,
	
	"onmypc.biz": 1,
	
	"onmypc.info": 1,
	
	"onmypc.net": 1,
	
	"onmypc.org": 1,
	
	"onmypc.us": 1,
	
	"onthehunt.com": 1,
	
	"ontrac.com": 1,
	
	"oopsforum.com": 1,
	
	"open.com.hk": 1,
	
	"openallweb.com": 1,
	
	"opendemocracy.net": 1,
	
	"opendn.xyz": 1,
	
	"openervpn.in": 1,
	
	"openid.net": 1,
	
	"openleaks.org": 1,
	
	"openvpn.net": 1,
	
	"openwebster.com": 1,
	
	"openwrt.org.cn": 1,
	
	"opml.radiotime.com": 1,
	
	"organcare.org.tw": 1,
	
	"organharvestinvestigation.net": 1,
	
	"organiccrap.com": 1,
	
	"orgasm.com": 1,
	
	"orgfree.com": 1,
	
	"orient-doll.com": 1,
	
	"orientaldaily.com.my": 1,
	
	"orn.jp": 1,
	
	"orzistic.org": 1,
	
	"osfoora.com": 1,
	
	"otnd.org": 1,
	
	"otto.de": 1,
	
	"otzo.com": 1,
	
	"ourdearamy.com": 1,
	
	"ourhobby.com": 1,
	
	"oursogo.com": 1,
	
	"oursteps.com.au": 1,
	
	"oursweb.net": 1,
	
	"ourtv.hk": 1,
	
	"overplay.net": 1,
	
	"oversea.istarshine.com": 1,
	
	"ow.ly": 1,
	
	"owl.li": 1,
	
	"oyax.com": 1,
	
	"oyghan.com": 1,
	
	"ozchinese.com": 1,
	
	"ozvoice.org": 1,
	
	"ozxw.com": 1,
	
	"ozyoyo.com": 1,
	
	"pachosting.com": 1,
	
	"pacificpoker.com": 1,
	
	"packages.debian.org": 1,
	
	"packetix.net": 1,
	
	"pacopacomama.com": 1,
	
	"padmanet.com": 1,
	
	"page.bid.yahoo.com": 1,
	
	"page2rss.com": 1,
	
	"pagodabox.com": 1,
	
	"palacemoon.com": 1,
	
	"paldengyal.com": 1,
	
	"paljorpublications.com": 1,
	
	"paltalk.com": 1,
	
	"panacom.co.jp": 1,
	
	"panamapapers.sueddeutsche.de": 1,
	
	"pandapow.co": 1,
	
	"pandapow.net": 1,
	
	"pandavpn-jp.com": 1,
	
	"pandora.com": 1,
	
	"pandora.tv": 1,
	
	"pangci.net": 1,
	
	"panluan.net": 1,
	
	"panoramio.com": 1,
	
	"pao-pao.net": 1,
	
	"paper.li": 1,
	
	"paperb.us": 1,
	
	"paradisehill.cc": 1,
	
	"paradisepoker.com": 1,
	
	"parkansky.com": 1,
	
	"partycasino.com": 1,
	
	"partypoker.com": 1,
	
	"passion.com": 1,
	
	"passiontimes.hk": 1,
	
	"pastebin.com": 1,
	
	"pastie.org": 1,
	
	"pbs.org": 1,
	
	"pbwiki.com": 1,
	
	"pbworks.com": 1,
	
	"pbxes.com": 1,
	
	"pbxes.org": 1,
	
	"pcanywhere.net": 1,
	
	"pcc.gov.tw": 1,
	
	"pcdvd.com.tw": 1,
	
	"pchome.com.tw": 1,
	
	"pcij.org": 1,
	
	"pcstore.com.tw": 1,
	
	"pct.org.tw": 1,
	
	"pdetails.com": 1,
	
	"pdproxy.com": 1,
	
	"pds.nasa.gov": 1,
	
	"peace.ca": 1,
	
	"peacefire.org": 1,
	
	"peacehall.com": 1,
	
	"pearlher.org": 1,
	
	"peeasian.com": 1,
	
	"pekingduck.org": 1,
	
	"pemulihan.or.id": 1,
	
	"pen.io": 1,
	
	"penchinese.com": 1,
	
	"penchinese.net": 1,
	
	"pengyulong.com": 1,
	
	"penisbot.com": 1,
	
	"penthouse.com": 1,
	
	"pentoy.hk": 1,
	
	"peoplebookcafe.com": 1,
	
	"peoplenews.tw": 1,
	
	"peopo.org": 1,
	
	"percy.in": 1,
	
	"perfectgirls.net": 1,
	
	"perfectvpn.net": 1,
	
	"persecutionblog.com": 1,
	
	"persiankitty.com": 1,
	
	"pfd.org.hk": 1,
	
	"phapluan.org": 1,
	
	"phayul.com": 1,
	
	"philborges.com": 1,
	
	"philly.com": 1,
	
	"phmsociety.org": 1,
	
	"phncdn.com": 1,
	
	"phosphation13.rssing.com": 1,
	
	"photodharma.net": 1,
	
	"photofocus.com": 1,
	
	"phuquocservices.com": 1,
	
	"picasaweb.com": 1,
	
	"picidae.net": 1,
	
	"picturedip.com": 1,
	
	"pictures.playboy.com": 1,
	
	"picturesocial.com": 1,
	
	"pimg.tw": 1,
	
	"pin-cong.com": 1,
	
	"pin6.com": 1,
	
	"ping.fm": 1,
	
	"pinimg.com": 1,
	
	"pinkrod.com": 1,
	
	"pinoy-n.com": 1,
	
	"pinterest.at": 1,
	
	"pinterest.co.kr": 1,
	
	"pinterest.co.uk": 1,
	
	"pinterest.com": 1,
	
	"pinterest.de": 1,
	
	"pinterest.dk": 1,
	
	"pinterest.fr": 1,
	
	"pinterest.jp": 1,
	
	"pinterest.nl": 1,
	
	"pinterest.se": 1,
	
	"pioneer-worker.forums-free.com": 1,
	
	"pipii.tv": 1,
	
	"piposay.com": 1,
	
	"piraattilahti.org": 1,
	
	"piring.com": 1,
	
	"pixelqi.com": 1,
	
	"pixiv.net": 1,
	
	"pixnet.net": 1,
	
	"pk.com": 1,
	
	"placemix.com": 1,
	
	"playboy.com": 1,
	
	"playboyplus.com": 1,
	
	"player.fm": 1,
	
	"playno1.com": 1,
	
	"playpcesor.com": 1,
	
	"plays.com.tw": 1,
	
	"plm.org.hk": 1,
	
	"plunder.com": 1,
	
	"plus28.com": 1,
	
	"plusbb.com": 1,
	
	"pmatehunter.com": 1,
	
	"pmates.com": 1,
	
	"po2b.com": 1,
	
	"pobieramy.top": 1,
	
	"podictionary.com": 1,
	
	"pokerstars.net": 1,
	
	"politicalchina.org": 1,
	
	"politicalconsultation.org": 1,
	
	"poloniex.com": 1,
	
	"polymer-project.org": 1,
	
	"polymerhk.com": 1,
	
	"popo.tw": 1,
	
	"popvote.hk": 1,
	
	"popyard.com": 1,
	
	"popyard.org": 1,
	
	"porn.com": 1,
	
	"porn2.com": 1,
	
	"porn5.com": 1,
	
	"pornbase.org": 1,
	
	"pornerbros.com": 1,
	
	"pornhd.com": 1,
	
	"pornhost.com": 1,
	
	"pornhub.com": 1,
	
	"pornhubdeutsch.net": 1,
	
	"pornmm.net": 1,
	
	"pornoxo.com": 1,
	
	"pornrapidshare.com": 1,
	
	"pornsharing.com": 1,
	
	"pornsocket.com": 1,
	
	"pornstarclub.com": 1,
	
	"porntube.com": 1,
	
	"porntubenews.com": 1,
	
	"porntvblog.com": 1,
	
	"pornvisit.com": 1,
	
	"port25.biz": 1,
	
	"portablevpn.nl": 1,
	
	"poskotanews.com": 1,
	
	"post01.com": 1,
	
	"post76.com": 1,
	
	"post852.com": 1,
	
	"postadult.com": 1,
	
	"postimg.org": 1,
	
	"potvpn.com": 1,
	
	"power.com": 1,
	
	"powerapple.com": 1,
	
	"powercx.com": 1,
	
	"powerphoto.org": 1,
	
	"prayforchina.net": 1,
	
	"premeforwindows7.com": 1,
	
	"presentationzen.com": 1,
	
	"presidentlee.tw": 1,
	
	"prestige-av.com": 1,
	
	"prisoneralert.com": 1,
	
	"pritunl.com": 1,
	
	"privacybox.de": 1,
	
	"private.com": 1,
	
	"privateinternetaccess.com": 1,
	
	"privatepaste.com": 1,
	
	"privatetunnel.com": 1,
	
	"privatevpn.com": 1,
	
	"procopytips.com": 1,
	
	"prosiben.de": 1,
	
	"provideocoalition.com": 1,
	
	"provpnaccounts.com": 1,
	
	"proxfree.com": 1,
	
	"proxifier.com": 1,
	
	"proxomitron.info": 1,
	
	"proxpn.com": 1,
	
	"proxy.org": 1,
	
	"proxyanonimo.es": 1,
	
	"proxydns.com": 1,
	
	"proxylist.org.uk": 1,
	
	"proxynetwork.org.uk": 1,
	
	"proxypy.net": 1,
	
	"proxyroad.com": 1,
	
	"proxytunnel.net": 1,
	
	"proyectoclubes.com": 1,
	
	"prozz.net": 1,
	
	"psblog.name": 1,
	
	"pscp.tv": 1,
	
	"psiphon.ca": 1,
	
	"psiphon.civisec.org": 1,
	
	"psiphon3.com": 1,
	
	"psiphontoday.com": 1,
	
	"pts.org.tw": 1,
	
	"ptt.cc": 1,
	
	"pttvan.org": 1,
	
	"pubu.com.tw": 1,
	
	"puffinbrowser.com": 1,
	
	"puffstore.com": 1,
	
	"pullfolio.com": 1,
	
	"pulse.yahoo.com": 1,
	
	"punyu.com": 1,
	
	"pure18.com": 1,
	
	"pureconcepts.net": 1,
	
	"pureinsight.org": 1,
	
	"purepdf.com": 1,
	
	"purevpn.com": 1,
	
	"purplelotus.org": 1,
	
	"pursuestar.com": 1,
	
	"pussyspace.com": 1,
	
	"putihome.org": 1,
	
	"putlocker.com": 1,
	
	"putty.org": 1,
	
	"puuko.com": 1,
	
	"pwned.com": 1,
	
	"python.com": 1,
	
	"python.com.tw": 1,
	
	"pythonhackers.com": 1,
	
	"qanote.com": 1,
	
	"qgirl.com.tw": 1,
	
	"qhigh.com": 1,
	
	"qi-gong.me": 1,
	
	"qiandao.today": 1,
	
	"qidian.ca": 1,
	
	"qienkuen.org": 1,
	
	"qiwen.lu": 1,
	
	"qixianglu.cn": 1,
	
	"qkshare.com": 1,
	
	"qoos.com": 1,
	
	"qpoe.com": 1,
	
	"qq.co.za": 1,
	
	"qstatus.com": 1,
	
	"qtrac.eu": 1,
	
	"qtweeter.com": 1,
	
	"quannengshen.org": 1,
	
	"quantumbooter.net": 1,
	
	"questvisual.com": 1,
	
	"quitccp.net": 1,
	
	"quitccp.org": 1,
	
	"quora.com": 1,
	
	"quran.com": 1,
	
	"quranexplorer.com": 1,
	
	"qusi8.net": 1,
	
	"qvodzy.org": 1,
	
	"qxbbs.org": 1,
	
	"r18.com": 1,
	
	"ra.gg": 1,
	
	"radicalparty.org": 1,
	
	"radiko.jp": 1,
	
	"radioaustralia.net.au": 1,
	
	"radiohilight.net": 1,
	
	"radiovaticana.org": 1,
	
	"radiovncr.com": 1,
	
	"rael.org": 1,
	
	"raggedbanner.com": 1,
	
	"raidcall.com.tw": 1,
	
	"raidtalk.com.tw": 1,
	
	"rainbowplan.org": 1,
	
	"raizoji.or.jp": 1,
	
	"ramcity.com.au": 1,
	
	"rangwang.biz": 1,
	
	"rangzen.com": 1,
	
	"rangzen.net": 1,
	
	"rangzen.org": 1,
	
	"ranyunfei.com": 1,
	
	"rapbull.net": 1,
	
	"rapidgator.net": 1,
	
	"rapidmoviez.com": 1,
	
	"rapidvpn.com": 1,
	
	"raremovie.cc": 1,
	
	"raremovie.net": 1,
	
	"raw.githubusercontent.com": 1,
	
	"rawgit.com": 1,
	
	"rawgithub.com": 1,
	
	"razyboard.com": 1,
	
	"rcinet.ca": 1,
	
	"rconversation.blogs.com": 1,
	
	"rd.com": 1,
	
	"rdio.com": 1,
	
	"read100.com": 1,
	
	"readingtimes.com.tw": 1,
	
	"readmoo.com": 1,
	
	"readydown.com": 1,
	
	"realcourage.org": 1,
	
	"realforum.zkiz.com": 1,
	
	"realraptalk.com": 1,
	
	"realsexpass.com": 1,
	
	"rebatesrule.net": 1,
	
	"recordhistory.org": 1,
	
	"recovery.org.tw": 1,
	
	"recoveryversion.com.tw": 1,
	
	"red-lang.org": 1,
	
	"redchinacn.net": 1,
	
	"redchinacn.org": 1,
	
	"redhotlabs.com": 1,
	
	"redtube.com": 1,
	
	"referer.us": 1,
	
	"reflectivecode.com": 1,
	
	"registry.google": 1,
	
	"relaxbbs.com": 1,
	
	"relay.com.tw": 1,
	
	"releaseinternational.org": 1,
	
	"religioustolerance.org": 1,
	
	"renminbao.com": 1,
	
	"renyurenquan.org": 1,
	
	"research.jmsc.hku.hk": 1,
	
	"resilio.com": 1,
	
	"retweeteffect.com": 1,
	
	"retweetist.com": 1,
	
	"retweetrank.com": 1,
	
	"reuters.com": 1,
	
	"reutersmedia.net": 1,
	
	"revleft.com": 1,
	
	"revver.com": 1,
	
	"rfa.org": 1,
	
	"rfachina.com": 1,
	
	"rfamobile.org": 1,
	
	"rfaweb.org": 1,
	
	"rferl.org": 1,
	
	"rfi.fr": 1,
	
	"rfi.my": 1,
	
	"rigpa.org": 1,
	
	"riku.me": 1,
	
	"rileyguide.com": 1,
	
	"riseup.net": 1,
	
	"ritouki.jp": 1,
	
	"rlwlw.com": 1,
	
	"rmjdw.com": 1,
	
	"rmjdw132.info": 1,
	
	"roadshow.hk": 1,
	
	"roboforex.com": 1,
	
	"robustnessiskey.com": 1,
	
	"roc-taiwan.org": 1,
	
	"rocket-inc.net": 1,
	
	"rocksdb.org": 1,
	
	"rojo.com": 1,
	
	"rolia.net": 1,
	
	"ronjoneswriter.com": 1,
	
	"roodo.com": 1,
	
	"rosechina.net": 1,
	
	"rotten.com": 1,
	
	"rsf-chinese.org": 1,
	
	"rsf.org": 1,
	
	"rsgamen.org": 1,
	
	"rssmeme.com": 1,
	
	"rtalabel.org": 1,
	
	"rthk.hk": 1,
	
	"rthk.org.hk": 1,
	
	"rti.org.tw": 1,
	
	"rtycminnesota.org": 1,
	
	"ruanyifeng.com": 1,
	
	"rukor.org": 1,
	
	"rushbee.com": 1,
	
	"ruten.com.tw": 1,
	
	"rutube.ru": 1,
	
	"ruyiseek.com": 1,
	
	"rxhj.net": 1,
	
	"s-cute.com": 1,
	
	"s-dragon.org": 1,
	
	"s1.nudezz.com": 1,
	
	"s1heng.com": 1,
	
	"s1s1s1.com": 1,
	
	"s3-ap-northeast-1.amazonaws.com": 1,
	
	"s3-ap-southeast-2.amazonaws.com": 1,
	
	"s3.amazonaws.com": 1,
	
	"s8forum.com": 1,
	
	"sa.hao123.com": 1,
	
	"sacks.com": 1,
	
	"sacom.hk": 1,
	
	"sadistic-v.com": 1,
	
	"sadpanda.us": 1,
	
	"safervpn.com": 1,
	
	"saintyculture.com": 1,
	
	"saiq.me": 1,
	
	"sakuralive.com": 1,
	
	"sakya.org": 1,
	
	"salvation.org.hk": 1,
	
	"samair.ru": 1,
	
	"sambhota.org": 1,
	
	"sanmin.com.tw": 1,
	
	"sapikachu.net": 1,
	
	"saveliuxiaobo.com": 1,
	
	"savemedia.com": 1,
	
	"savethedate.foo": 1,
	
	"savetibet.de": 1,
	
	"savetibet.fr": 1,
	
	"savetibet.nl": 1,
	
	"savetibet.org": 1,
	
	"savetibet.ru": 1,
	
	"savetibetstore.org": 1,
	
	"savevid.com": 1,
	
	"say2.info": 1,
	
	"sbme.me": 1,
	
	"sbs.com.au": 1,
	
	"scasino.com": 1,
	
	"schema.org": 1,
	
	"sciencenets.com": 1,
	
	"scieron.com": 1,
	
	"scmp.com": 1,
	
	"scmpchinese.com": 1,
	
	"scramble.io": 1,
	
	"scribd.com": 1,
	
	"scriptspot.com": 1,
	
	"seapuff.com": 1,
	
	"search.aol.com": 1,
	
	"search.disconnect.me": 1,
	
	"search.xxx": 1,
	
	"search.yahoo.co.jp": 1,
	
	"searchtruth.com": 1,
	
	"secretchina.com": 1,
	
	"secretgarden.no": 1,
	
	"secretsline.biz": 1,
	
	"secure.hustler.com": 1,
	
	"secure.logmein.com": 1,
	
	"securetunnel.com": 1,
	
	"securitykiss.com": 1,
	
	"seed4.me": 1,
	
	"seesmic.com": 1,
	
	"seevpn.com": 1,
	
	"seezone.net": 1,
	
	"sejie.com": 1,
	
	"sellclassics.com": 1,
	
	"sendsmtp.com": 1,
	
	"sendspace.com": 1,
	
	"servehttp.com": 1,
	
	"serveuser.com": 1,
	
	"serveusers.com": 1,
	
	"sesawe.net": 1,
	
	"sesawe.org": 1,
	
	"sethwklein.net": 1,
	
	"setn.com": 1,
	
	"settv.com.tw": 1,
	
	"sevenload.com": 1,
	
	"sex-11.com": 1,
	
	"sex.com": 1,
	
	"sex3.com": 1,
	
	"sex8.cc": 1,
	
	"sexandsubmission.com": 1,
	
	"sexbot.com": 1,
	
	"sexhu.com": 1,
	
	"sexhuang.com": 1,
	
	"sexidude.com": 1,
	
	"sexinsex.net": 1,
	
	"sextvx.com": 1,
	
	"sexxxy.biz": 1,
	
	"sf.net": 1,
	
	"sfileydy.com": 1,
	
	"sfshibao.com": 1,
	
	"sftindia.org": 1,
	
	"sftuk.org": 1,
	
	"shadeyouvpn.com": 1,
	
	"shadow.ma": 1,
	
	"shadowsky.xyz": 1,
	
	"shadowsocks-r.com": 1,
	
	"shadowsocks.asia": 1,
	
	"shadowsocks.com": 1,
	
	"shadowsocks.com.hk": 1,
	
	"shadowsocks.org": 1,
	
	"shambalapost.com": 1,
	
	"shambhalasun.com": 1,
	
	"shangfang.org": 1,
	
	"shapeservices.com": 1,
	
	"share.dmhy.org": 1,
	
	"share.ovi.com": 1,
	
	"share.youthwant.com.tw": 1,
	
	"sharebee.com": 1,
	
	"sharecool.org": 1,
	
	"sharpdaily.com.hk": 1,
	
	"sharpdaily.hk": 1,
	
	"sharpdaily.tw": 1,
	
	"shat-tibet.com": 1,
	
	"shattered.io": 1,
	
	"sheikyermami.com": 1,
	
	"shellfire.de": 1,
	
	"shenshou.org": 1,
	
	"shenyun.com": 1,
	
	"shenyunperformingarts.org": 1,
	
	"shenzhoufilm.com": 1,
	
	"sherabgyaltsen.com": 1,
	
	"shiatv.net": 1,
	
	"shicheng.org": 1,
	
	"shinychan.com": 1,
	
	"shipcamouflage.com": 1,
	
	"shireyishunjian.com": 1,
	
	"shitaotv.org": 1,
	
	"shixiao.org": 1,
	
	"shizhao.org": 1,
	
	"shkspr.mobi": 1,
	
	"shodanhq.com": 1,
	
	"shooshtime.com": 1,
	
	"shop2000.com.tw": 1,
	
	"shopping.com": 1,
	
	"showbiz.omy.sg": 1,
	
	"showhaotu.com": 1,
	
	"showtime.jp": 1,
	
	"shutterstock.com": 1,
	
	"shwchurch.org": 1,
	
	"shwchurch3.com": 1,
	
	"siddharthasintent.org": 1,
	
	"sidelinesnews.com": 1,
	
	"sidelinessportseatery.com": 1,
	
	"sierrafriendsoftibet.org": 1,
	
	"signal.org": 1,
	
	"sijihuisuo.club": 1,
	
	"sijihuisuo.com": 1,
	
	"silkbook.com": 1,
	
	"simbolostwitter.com": 1,
	
	"simplecd.org": 1,
	
	"simpleproductivityblog.com": 1,
	
	"sinchew.com.my": 1,
	
	"singaporepools.com.sg": 1,
	
	"singfortibet.com": 1,
	
	"singpao.com.hk": 1,
	
	"singtao.com": 1,
	
	"singtaousa.com": 1,
	
	"sino-monthly.com": 1,
	
	"sinoants.com": 1,
	
	"sinocast.com": 1,
	
	"sinocism.com": 1,
	
	"sinomontreal.ca": 1,
	
	"sinonet.ca": 1,
	
	"sinopitt.info": 1,
	
	"sinoquebec.com": 1,
	
	"sipml5.org": 1,
	
	"sis.xxx": 1,
	
	"sis001.com": 1,
	
	"sis001.us": 1,
	
	"site90.net": 1,
	
	"sitebro.tw": 1,
	
	"sitekreator.com": 1,
	
	"siteks.uk.to": 1,
	
	"sitemaps.org": 1,
	
	"sixth.biz": 1,
	
	"sjrt.org": 1,
	
	"sjum.cn": 1,
	
	"sketchappsources.com": 1,
	
	"skimtube.com": 1,
	
	"skybet.com": 1,
	
	"skyking.com.tw": 1,
	
	"skyvegas.com": 1,
	
	"skyxvpn.com": 1,
	
	"slacker.com": 1,
	
	"slaytizle.com": 1,
	
	"sleazydream.com": 1,
	
	"slheng.com": 1,
	
	"slickvpn.com": 1,
	
	"slideshare.net": 1,
	
	"slinkset.com": 1,
	
	"slutload.com": 1,
	
	"slutmoonbeam.com": 1,
	
	"slyip.com": 1,
	
	"slyip.net": 1,
	
	"sm-miracle.com": 1,
	
	"smartdnsproxy.com": 1,
	
	"smarthide.com": 1,
	
	"smchbooks.com": 1,
	
	"smh.com.au": 1,
	
	"smhric.org": 1,
	
	"smith.edu": 1,
	
	"smyxy.org": 1,
	
	"snapchat.com": 1,
	
	"snaptu.com": 1,
	
	"sndcdn.com": 1,
	
	"sneakme.net": 1,
	
	"snowlionpub.com": 1,
	
	"sobees.com": 1,
	
	"soc.mil": 1,
	
	"socialwhale.com": 1,
	
	"sockscap64.com": 1,
	
	"sockslist.net": 1,
	
	"socrec.org": 1,
	
	"sod.co.jp": 1,
	
	"sodatea.github.io": 1,
	
	"softether-download.com": 1,
	
	"softether.co.jp": 1,
	
	"softether.org": 1,
	
	"softwarebychuck.com": 1,
	
	"softwaredownload.gitbooks.io": 1,
	
	"sogclub.com": 1,
	
	"sogrady.me": 1,
	
	"soh.tw": 1,
	
	"sohcradio.com": 1,
	
	"sohfrance.org": 1,
	
	"sokamonline.com": 1,
	
	"sokmil.com": 1,
	
	"solarsystem.nasa.gov": 1,
	
	"solidaritetibet.org": 1,
	
	"solidfiles.com": 1,
	
	"soma.im": 1,
	
	"somee.com": 1,
	
	"songjianjun.com": 1,
	
	"sonicbbs.cc": 1,
	
	"sonidodelaesperanza.org": 1,
	
	"sopcast.com": 1,
	
	"sopcast.org": 1,
	
	"sorazone.net": 1,
	
	"sorting-algorithms.com": 1,
	
	"sos.org": 1,
	
	"sostibet.org": 1,
	
	"soubory.com": 1,
	
	"soul-plus.net": 1,
	
	"soulcaliburhentai.net": 1,
	
	"soumo.info": 1,
	
	"soundcloud.com": 1,
	
	"soundofhope.kr": 1,
	
	"soundofhope.org": 1,
	
	"soup.io": 1,
	
	"soupofmedia.com": 1,
	
	"sourceforge.net": 1,
	
	"sourcewadio.com": 1,
	
	"southnews.com.tw": 1,
	
	"sowers.org.hk": 1,
	
	"spankbang.com": 1,
	
	"spankingtube.com": 1,
	
	"spankwire.com": 1,
	
	"spb.com": 1,
	
	"speakerdeck.com": 1,
	
	"specxinzl.jigsy.com": 1,
	
	"speedify.com": 1,
	
	"spem.at": 1,
	
	"spencertipping.com": 1,
	
	"spicevpn.com": 1,
	
	"spideroak.com": 1,
	
	"spike.com": 1,
	
	"sports.williamhill.com": 1,
	
	"spotflux.com": 1,
	
	"spotify.com": 1,
	
	"spreadshirt.es": 1,
	
	"spring4u.info": 1,
	
	"springboardplatform.com": 1,
	
	"sprite.org": 1,
	
	"sproutcore.com": 1,
	
	"sproxy.info": 1,
	
	"squirly.info": 1,
	
	"srcf.ucam.org": 1,
	
	"srocket.us": 1,
	
	"ss-link.com": 1,
	
	"ss.carryzhou.com": 1,
	
	"ssglobal.co": 1,
	
	"ssglobal.me": 1,
	
	"ssh91.com": 1,
	
	"ssl.webpack.de": 1,
	
	"ssl443.org": 1,
	
	"sspro.ml": 1,
	
	"sss.camp": 1,
	
	"sstmlt.moe": 1,
	
	"sstmlt.net": 1,
	
	"stackoverflow.com": 1,
	
	"stage64.hk": 1,
	
	"standupfortibet.org": 1,
	
	"stanford.edu": 1,
	
	"starfishfx.com": 1,
	
	"starp2p.com": 1,
	
	"startpage.com": 1,
	
	"startuplivingchina.com": 1,
	
	"stat.gov.tw": 1,
	
	"static-economist.com": 1,
	
	"static.comico.tw": 1,
	
	"static01.nyt.com": 1,
	
	"staticflickr.com": 1,
	
	"statueofdemocracy.org": 1,
	
	"stc.com.sa": 1,
	
	"steamcommunity.com": 1,
	
	"steel-storm.com": 1,
	
	"steganos.com": 1,
	
	"steganos.net": 1,
	
	"stepchina.com": 1,
	
	"stephaniered.com": 1,
	
	"sthoo.com": 1,
	
	"stickam.com": 1,
	
	"stickeraction.com": 1,
	
	"stileproject.com": 1,
	
	"sto.cc": 1,
	
	"stoneip.info": 1,
	
	"stoptibetcrisis.net": 1,
	
	"storagenewsletter.com": 1,
	
	"stories.google": 1,
	
	"storify.com": 1,
	
	"storm.mg": 1,
	
	"stormmediagroup.com": 1,
	
	"stoweboyd.com": 1,
	
	"stranabg.com": 1,
	
	"streamingthe.net": 1,
	
	"streema.com": 1,
	
	"strikingly.com": 1,
	
	"strongvpn.com": 1,
	
	"strongwindpress.com": 1,
	
	"student.tw": 1,
	
	"studentsforafreetibet.org": 1,
	
	"stumbleupon.com": 1,
	
	"stupidvideos.com": 1,
	
	"subacme.rerouted.org": 1,
	
	"successfn.com": 1,
	
	"sugarsync.com": 1,
	
	"sugobbs.com": 1,
	
	"sugumiru18.com": 1,
	
	"suissl.com": 1,
	
	"sujiatun.wordpress.com": 1,
	
	"summify.com": 1,
	
	"sumrando.com": 1,
	
	"sun1911.com": 1,
	
	"sunmedia.ca": 1,
	
	"sunporno.com": 1,
	
	"sunskyforum.com": 1,
	
	"sunta.com.tw": 1,
	
	"sunvpn.net": 1,
	
	"suoluo.org": 1,
	
	"superfreevpn.com": 1,
	
	"superokayama.com": 1,
	
	"superpages.com": 1,
	
	"supervpn.net": 1,
	
	"suppig.net": 1,
	
	"suprememastertv.com": 1,
	
	"surfeasy.com": 1,
	
	"surfeasy.com.au": 1,
	
	"suroot.com": 1,
	
	"surrenderat20.net": 1,
	
	"suyangg.com": 1,
	
	"swagbucks.com": 1,
	
	"swift-tools.net": 1,
	
	"swissvpn.net": 1,
	
	"switch1.jp": 1,
	
	"switchvpn.net": 1,
	
	"sydneytoday.com": 1,
	
	"sylfoundation.org": 1,
	
	"syncback.com": 1,
	
	"synergyse.com": 1,
	
	"sysresccd.org": 1,
	
	"sytes.net": 1,
	
	"szbbs.net": 1,
	
	"szetowah.org.hk": 1,
	
	"t.co": 1,
	
	"t.me": 1,
	
	"t.orzdream.com": 1,
	
	"t35.com": 1,
	
	"t66y.com": 1,
	
	"taa-usa.org": 1,
	
	"taaze.tw": 1,
	
	"tabtter.jp": 1,
	
	"tacc.cwb.gov.tw": 1,
	
	"tacem.org": 1,
	
	"taconet.com.tw": 1,
	
	"taedp.org.tw": 1,
	
	"tafm.org": 1,
	
	"tagwa.org.au": 1,
	
	"tagwalk.com": 1,
	
	"tahr.org.tw": 1,
	
	"taipei.gov.tw": 1,
	
	"taipeisociety.org": 1,
	
	"taiwan-sex.com": 1,
	
	"taiwanbible.com": 1,
	
	"taiwancon.com": 1,
	
	"taiwandaily.net": 1,
	
	"taiwandc.org": 1,
	
	"taiwanembassy.org": 1,
	
	"taiwanjobs.gov.tw": 1,
	
	"taiwanjustice.com": 1,
	
	"taiwankiss.com": 1,
	
	"taiwannation.50webs.com": 1,
	
	"taiwannation.com": 1,
	
	"taiwannation.com.tw": 1,
	
	"taiwanncf.org.tw": 1,
	
	"taiwannews.com.tw": 1,
	
	"taiwantoday.tw": 1,
	
	"taiwantp.net": 1,
	
	"taiwantt.org.tw": 1,
	
	"taiwanus.net": 1,
	
	"taiwanyes.com": 1,
	
	"taiwanyes.ning.com": 1,
	
	"talk853.com": 1,
	
	"talkboxapp.com": 1,
	
	"talkonly.net": 1,
	
	"tamiaode.tk": 1,
	
	"tanc.org": 1,
	
	"tangben.com": 1,
	
	"tangren.us": 1,
	
	"taoism.net": 1,
	
	"taolun.info": 1,
	
	"tapanwap.com": 1,
	
	"tapatalk.com": 1,
	
	"tarr.uspto.gov": 1,
	
	"tascn.com.au": 1,
	
	"taup.net": 1,
	
	"taweet.com": 1,
	
	"tbcollege.org": 1,
	
	"tbi.org.hk": 1,
	
	"tbicn.org": 1,
	
	"tbjyt.org": 1,
	
	"tbpic.info": 1,
	
	"tbrc.org": 1,
	
	"tbs-rainbow.org": 1,
	
	"tbsec.org": 1,
	
	"tbskkinabalu.page.tl": 1,
	
	"tbsmalaysia.org": 1,
	
	"tbsn.org": 1,
	
	"tbsseattle.org": 1,
	
	"tbssqh.org": 1,
	
	"tbswd.org": 1,
	
	"tbtemple.org.uk": 1,
	
	"tbthouston.org": 1,
	
	"tccwonline.org": 1,
	
	"tcewf.org": 1,
	
	"tchrd.org": 1,
	
	"tcnynj.org": 1,
	
	"tcsofbc.org": 1,
	
	"tcsovi.org": 1,
	
	"teachparentstech.org": 1,
	
	"teamamericany.com": 1,
	
	"tech2.in.com": 1,
	
	"teck.in": 1,
	
	"teeniefuck.net": 1,
	
	"teensinasia.com": 1,
	
	"telecomspace.com": 1,
	
	"telegram.dog": 1,
	
	"telegram.me": 1,
	
	"telegram.org": 1,
	
	"telegramdownload.com": 1,
	
	"telegraph.co.uk": 1,
	
	"tellme.pw": 1,
	
	"tenacy.com": 1,
	
	"tensorflow.org": 1,
	
	"tenzinpalmo.com": 1,
	
	"tew.org": 1,
	
	"th.hao123.com": 1,
	
	"thaicn.com": 1,
	
	"thb.gov.tw": 1,
	
	"theatrum-belli.com": 1,
	
	"thebcomplex.com": 1,
	
	"theblemish.com": 1,
	
	"thebobs.com": 1,
	
	"thebodyshop-usa.com": 1,
	
	"thecenter.mit.edu": 1,
	
	"thechinabeat.org": 1,
	
	"thedalailamamovie.com": 1,
	
	"thedw.us": 1,
	
	"thefacebook.com": 1,
	
	"thefrontier.hk": 1,
	
	"thegioitinhoc.vn": 1,
	
	"thegly.com": 1,
	
	"thehots.info": 1,
	
	"thehousenews.com": 1,
	
	"thehun.net": 1,
	
	"theinitium.com": 1,
	
	"thenewslens.com": 1,
	
	"thepiratebay.org": 1,
	
	"theportalwiki.com": 1,
	
	"thereallove.kr": 1,
	
	"therock.net.nz": 1,
	
	"thespeeder.com": 1,
	
	"thestandnews.com": 1,
	
	"thetibetcenter.org": 1,
	
	"thetibetconnection.org": 1,
	
	"thetibetmuseum.org": 1,
	
	"thetibetpost.com": 1,
	
	"thetrotskymovie.com": 1,
	
	"thevivekspot.com": 1,
	
	"thewgo.org": 1,
	
	"thinkingtaiwan.com": 1,
	
	"thinkwithgoogle.com": 1,
	
	"thisav.com": 1,
	
	"thlib.org": 1,
	
	"thomasbernhard.org": 1,
	
	"thongdreams.com": 1,
	
	"threatchaos.com": 1,
	
	"throughnightsfire.com": 1,
	
	"thumbzilla.com": 1,
	
	"thywords.com": 1,
	
	"thywords.com.tw": 1,
	
	"tiananmenduizhi.com": 1,
	
	"tiananmenmother.org": 1,
	
	"tiananmenuniv.com": 1,
	
	"tiananmenuniv.net": 1,
	
	"tiandixing.org": 1,
	
	"tianhuayuan.com": 1,
	
	"tianlawoffice.com": 1,
	
	"tianti.io": 1,
	
	"tiantibooks.org": 1,
	
	"tianyantong.org.cn": 1,
	
	"tianzhu.org": 1,
	
	"tibet-envoy.eu": 1,
	
	"tibet-foundation.org": 1,
	
	"tibet-house-trust.co.uk": 1,
	
	"tibet-info.net": 1,
	
	"tibet-initiative.de": 1,
	
	"tibet-munich.de": 1,
	
	"tibet.a.se": 1,
	
	"tibet.at": 1,
	
	"tibet.ca": 1,
	
	"tibet.com": 1,
	
	"tibet.fr": 1,
	
	"tibet.net": 1,
	
	"tibet.nu": 1,
	
	"tibet.org": 1,
	
	"tibet.org.tw": 1,
	
	"tibet.sk": 1,
	
	"tibet.to": 1,
	
	"tibet3rdpole.org": 1,
	
	"tibetaction.net": 1,
	
	"tibetaid.org": 1,
	
	"tibetalk.com": 1,
	
	"tibetan-alliance.org": 1,
	
	"tibetan.fr": 1,
	
	"tibetanaidproject.org": 1,
	
	"tibetanarts.org": 1,
	
	"tibetanbuddhistinstitute.org": 1,
	
	"tibetancommunity.org": 1,
	
	"tibetancommunityuk.net": 1,
	
	"tibetanculture.org": 1,
	
	"tibetanfeministcollective.org": 1,
	
	"tibetanjournal.com": 1,
	
	"tibetanlanguage.org": 1,
	
	"tibetanliberation.org": 1,
	
	"tibetanpaintings.com": 1,
	
	"tibetanphotoproject.com": 1,
	
	"tibetanpoliticalreview.org": 1,
	
	"tibetanreview.net": 1,
	
	"tibetansports.org": 1,
	
	"tibetanwomen.org": 1,
	
	"tibetanyouth.org": 1,
	
	"tibetanyouthcongress.org": 1,
	
	"tibetcharity.dk": 1,
	
	"tibetcharity.in": 1,
	
	"tibetchild.org": 1,
	
	"tibetcity.com": 1,
	
	"tibetcollection.com": 1,
	
	"tibetcorps.org": 1,
	
	"tibetexpress.net": 1,
	
	"tibetfocus.com": 1,
	
	"tibetfund.org": 1,
	
	"tibetgermany.com": 1,
	
	"tibetgermany.de": 1,
	
	"tibethaus.com": 1,
	
	"tibetheritagefund.org": 1,
	
	"tibethouse.jp": 1,
	
	"tibethouse.org": 1,
	
	"tibethouse.us": 1,
	
	"tibetinfonet.net": 1,
	
	"tibetjustice.org": 1,
	
	"tibetkomite.dk": 1,
	
	"tibetlibre.free.fr": 1,
	
	"tibetmuseum.org": 1,
	
	"tibetnetwork.org": 1,
	
	"tibetoffice.ch": 1,
	
	"tibetoffice.com.au": 1,
	
	"tibetoffice.eu": 1,
	
	"tibetoffice.org": 1,
	
	"tibetonline.com": 1,
	
	"tibetonline.tv": 1,
	
	"tibetoralhistory.org": 1,
	
	"tibetpolicy.eu": 1,
	
	"tibetrelieffund.co.uk": 1,
	
	"tibetsites.com": 1,
	
	"tibetsociety.com": 1,
	
	"tibetsun.com": 1,
	
	"tibetsupportgroup.org": 1,
	
	"tibetswiss.ch": 1,
	
	"tibettelegraph.com": 1,
	
	"tibettimes.net": 1,
	
	"tibetwrites.org": 1,
	
	"ticket.com.tw": 1,
	
	"tigervpn.com": 1,
	
	"tiltbrush.com": 1,
	
	"timdir.com": 1,
	
	"time.com": 1,
	
	"times.hinet.net": 1,
	
	"timesofindia.indiatimes.com": 1,
	
	"timsah.com": 1,
	
	"tintuc101.com": 1,
	
	"tiny.cc": 1,
	
	"tinychat.com": 1,
	
	"tinypaste.com": 1,
	
	"tipo.gov.tw": 1,
	
	"tistory.com": 1,
	
	"tkcs-collins.com": 1,
	
	"tl.gd": 1,
	
	"tma.co.jp": 1,
	
	"tmagazine.com": 1,
	
	"tmdfish.com": 1,
	
	"tmi.me": 1,
	
	"tmpp.org": 1,
	
	"tnaflix.com": 1,
	
	"tngrnow.com": 1,
	
	"tngrnow.net": 1,
	
	"tnp.org": 1,
	
	"to-porno.com": 1,
	
	"togetter.com": 1,
	
	"toh.info": 1,
	
	"tokyo-247.com": 1,
	
	"tokyo-hot.com": 1,
	
	"tokyo-porn-tube.com": 1,
	
	"tokyocn.com": 1,
	
	"tongil.or.kr": 1,
	
	"tono-oka.jp": 1,
	
	"tonyyan.net": 1,
	
	"toodoc.com": 1,
	
	"toonel.net": 1,
	
	"top.tv": 1,
	
	"top81.ws": 1,
	
	"topic.youthwant.com.tw": 1,
	
	"topnews.in": 1,
	
	"toppornsites.com": 1,
	
	"topshareware.com": 1,
	
	"topsy.com": 1,
	
	"toptip.ca": 1,
	
	"tor.blingblingsquad.net": 1,
	
	"tor.cn.uptodown.com": 1,
	
	"tor.updatestar.com": 1,
	
	"tora.to": 1,
	
	"torcn.com": 1,
	
	"torguard.net": 1,
	
	"torproject.org": 1,
	
	"torrentcrazy.com": 1,
	
	"torrentprivacy.com": 1,
	
	"torrentproject.se": 1,
	
	"torrenty.org": 1,
	
	"torrentz.eu": 1,
	
	"torvpn.com": 1,
	
	"tosh.comedycentral.com": 1,
	
	"totalvpn.com": 1,
	
	"toutiaoabc.com": 1,
	
	"towngain.com": 1,
	
	"toypark.in": 1,
	
	"toythieves.com": 1,
	
	"toytractorshow.com": 1,
	
	"tparents.org": 1,
	
	"tpi.org.tw": 1,
	
	"tracfone.com": 1,
	
	"traffichaus.com": 1,
	
	"trans.wenweipo.com": 1,
	
	"transparency.org": 1,
	
	"treemall.com.tw": 1,
	
	"trendsmap.com": 1,
	
	"trialofccp.org": 1,
	
	"trickip.net": 1,
	
	"trickip.org": 1,
	
	"trimondi.de": 1,
	
	"trouw.nl": 1,
	
	"trt.net.tr": 1,
	
	"trtc.com.tw": 1,
	
	"truebuddha-md.org": 1,
	
	"trulyergonomic.com": 1,
	
	"truth101.co.tv": 1,
	
	"truthontour.org": 1,
	
	"truveo.com": 1,
	
	"tryheart.jp": 1,
	
	"tsctv.net": 1,
	
	"tsdr.uspto.gov": 1,
	
	"tsemtulku.com": 1,
	
	"tsquare.tv": 1,
	
	"tsu.org.tw": 1,
	
	"tsunagarumon.com": 1,
	
	"tt-rss.org": 1,
	
	"tt1069.com": 1,
	
	"tttan.com": 1,
	
	"tu8964.com": 1,
	
	"tubaholic.com": 1,
	
	"tube.com": 1,
	
	"tube8.com": 1,
	
	"tube911.com": 1,
	
	"tubecup.com": 1,
	
	"tubegals.com": 1,
	
	"tubeislam.com": 1,
	
	"tubestack.com": 1,
	
	"tubewolf.com": 1,
	
	"tui.orzdream.com": 1,
	
	"tuidang.net": 1,
	
	"tuidang.org": 1,
	
	"tuidang.se": 1,
	
	"tuitwit.com": 1,
	
	"tumblr.com": 1,
	
	"tumutanzi.com": 1,
	
	"tumview.com": 1,
	
	"tunein.com": 1,
	
	"tunnelbear.com": 1,
	
	"tunnelr.com": 1,
	
	"tuo8.blue": 1,
	
	"tuo8.cc": 1,
	
	"tuo8.club": 1,
	
	"tuo8.fit": 1,
	
	"tuo8.hk": 1,
	
	"tuo8.in": 1,
	
	"tuo8.ninja": 1,
	
	"tuo8.org": 1,
	
	"tuo8.pw": 1,
	
	"tuo8.red": 1,
	
	"tuo8.space": 1,
	
	"turansam.org": 1,
	
	"turbobit.net": 1,
	
	"turbohide.com": 1,
	
	"turbotwitter.com": 1,
	
	"turntable.fm": 1,
	
	"tushycash.com": 1,
	
	"tuvpn.com": 1,
	
	"tuzaijidi.com": 1,
	
	"tv.com": 1,
	
	"tvants.com": 1,
	
	"tvboxnow.com": 1,
	
	"tvider.com": 1,
	
	"tvmost.com.hk": 1,
	
	"tvplayvideos.com": 1,
	
	"tvunetworks.com": 1,
	
	"tw-blog.com": 1,
	
	"tw-npo.org": 1,
	
	"tw.answers.yahoo.com": 1,
	
	"tw.bid.yahoo.com": 1,
	
	"tw.gigacircle.com": 1,
	
	"tw.hao123.com": 1,
	
	"tw.jiepang.com": 1,
	
	"tw.knowledge.yahoo.com": 1,
	
	"tw.mall.yahoo.com": 1,
	
	"tw.mobi.yahoo.com": 1,
	
	"tw.myblog.yahoo.com": 1,
	
	"tw.news.yahoo.com": 1,
	
	"tw.streetvoice.com": 1,
	
	"tw.tomonews.net": 1,
	
	"tw.voa.mobi": 1,
	
	"tw.yahoo.com": 1,
	
	"tw01.org": 1,
	
	"twaitter.com": 1,
	
	"twapperkeeper.com": 1,
	
	"twaud.io": 1,
	
	"twavi.com": 1,
	
	"twbbs.net.tw": 1,
	
	"twbbs.org": 1,
	
	"twbbs.tw": 1,
	
	"twblogger.com": 1,
	
	"tweepguide.com": 1,
	
	"tweeplike.me": 1,
	
	"tweepmag.com": 1,
	
	"tweepml.org": 1,
	
	"tweetbackup.com": 1,
	
	"tweetboard.com": 1,
	
	"tweetboner.biz": 1,
	
	"tweetcs.com": 1,
	
	"tweetdeck.com": 1,
	
	"tweetedtimes.com": 1,
	
	"tweetmylast.fm": 1,
	
	"tweetphoto.com": 1,
	
	"tweetrans.com": 1,
	
	"tweetree.com": 1,
	
	"tweets.seraph.me": 1,
	
	"tweettunnel.com": 1,
	
	"tweetwally.com": 1,
	
	"tweetymail.com": 1,
	
	"tweez.net": 1,
	
	"twelve.today": 1,
	
	"twerkingbutt.com": 1,
	
	"twftp.org": 1,
	
	"twgreatdaily.com": 1,
	
	"twibase.com": 1,
	
	"twibble.de": 1,
	
	"twibbon.com": 1,
	
	"twibs.com": 1,
	
	"twicsy.com": 1,
	
	"twiends.com": 1,
	
	"twifan.com": 1,
	
	"twiffo.com": 1,
	
	"twiggit.org": 1,
	
	"twilightsex.com": 1,
	
	"twilog.org": 1,
	
	"twimbow.com": 1,
	
	"twimg.com": 1,
	
	"twindexx.com": 1,
	
	"twip.me": 1,
	
	"twipple.jp": 1,
	
	"twishort.com": 1,
	
	"twistar.cc": 1,
	
	"twister.net.co": 1,
	
	"twisterio.com": 1,
	
	"twisternow.com": 1,
	
	"twistory.net": 1,
	
	"twit2d.com": 1,
	
	"twitbrowser.net": 1,
	
	"twitcause.com": 1,
	
	"twitgether.com": 1,
	
	"twitgoo.com": 1,
	
	"twitiq.com": 1,
	
	"twitlonger.com": 1,
	
	"twitmania.com": 1,
	
	"twitoaster.com": 1,
	
	"twitonmsn.com": 1,
	
	"twitpic.com": 1,
	
	"twitstat.com": 1,
	
	"twittbot.net": 1,
	
	"twitter.com": 1,
	
	"twitter.jp": 1,
	
	"twitter4j.org": 1,
	
	"twittercounter.com": 1,
	
	"twitterfeed.com": 1,
	
	"twittergadget.com": 1,
	
	"twitterkr.com": 1,
	
	"twittermail.com": 1,
	
	"twitterrific.com": 1,
	
	"twittertim.es": 1,
	
	"twitthat.com": 1,
	
	"twitturk.com": 1,
	
	"twitturly.com": 1,
	
	"twitvid.com": 1,
	
	"twitzap.com": 1,
	
	"twiyia.com": 1,
	
	"twnorth.org.tw": 1,
	
	"twskype.com": 1,
	
	"twstar.net": 1,
	
	"twt.tl": 1,
	
	"twtkr.com": 1,
	
	"twtr2src.ogaoga.org": 1,
	
	"twtrland.com": 1,
	
	"twttr.com": 1,
	
	"twurl.nl": 1,
	
	"twyac.org": 1,
	
	"txxx.com": 1,
	
	"tycool.com": 1,
	
	"typepad.com": 1,
	
	"tzangms.com": 1,
	
	"u9un.com": 1,
	
	"ub0.cc": 1,
	
	"ubddns.org": 1,
	
	"uberproxy.net": 1,
	
	"uc-japan.org": 1,
	
	"ucdc1998.org": 1,
	
	"uchicago.edu": 1,
	
	"uderzo.it": 1,
	
	"udn.com": 1,
	
	"udn.com.tw": 1,
	
	"udnbkk.com": 1,
	
	"uforadio.com.tw": 1,
	
	"ufreevpn.com": 1,
	
	"ugo.com": 1,
	
	"uhdwallpapers.org": 1,
	
	"uhrp.org": 1,
	
	"uighur.narod.ru": 1,
	
	"uighur.nl": 1,
	
	"uighurbiz.net": 1,
	
	"ukcdp.co.uk": 1,
	
	"ukliferadio.co.uk": 1,
	
	"ulike.net": 1,
	
	"ulop.net": 1,
	
	"ultravpn.fr": 1,
	
	"ultraxs.com": 1,
	
	"umich.edu": 1,
	
	"unblock-us.com": 1,
	
	"unblock.cn.com": 1,
	
	"unblockdmm.com": 1,
	
	"unblocker.yt": 1,
	
	"unblocksit.es": 1,
	
	"uncyclomedia.org": 1,
	
	"uncyclopedia.hk": 1,
	
	"uncyclopedia.tw": 1,
	
	"underwoodammo.com": 1,
	
	"unholyknight.com": 1,
	
	"uni.cc": 1,
	
	"unification.net": 1,
	
	"unification.org.tw": 1,
	
	"unitedsocialpress.com": 1,
	
	"unix100.com": 1,
	
	"unknownspace.org": 1,
	
	"unodedos.com": 1,
	
	"unpo.org": 1,
	
	"untraceable.us": 1,
	
	"uocn.org": 1,
	
	"upcoming.yahoo.com": 1,
	
	"updates.tdesktop.com": 1,
	
	"upholdjustice.org": 1,
	
	"upload4u.info": 1,
	
	"uploaded.net": 1,
	
	"uploaded.to": 1,
	
	"uploadstation.com": 1,
	
	"upmedia.mg": 1,
	
	"upornia.com": 1,
	
	"uproxy.org": 1,
	
	"upwill.org": 1,
	
	"ur7s.com": 1,
	
	"urbansurvival.com": 1,
	
	"urchin.com": 1,
	
	"urlborg.com": 1,
	
	"urlparser.com": 1,
	
	"us.to": 1,
	
	"usacn.com": 1,
	
	"usaip.eu": 1,
	
	"userapi.nytlog.com": 1,
	
	"users.skynet.be": 1,
	
	"usfk.mil": 1,
	
	"ushuarencity.echainhost.com": 1,
	
	"usinfo.state.gov": 1,
	
	"usma.edu": 1,
	
	"usmc.mil": 1,
	
	"usmgtcg.ning.com": 1,
	
	"usno.navy.mil": 1,
	
	"usocctn.com": 1,
	
	"ustream.tv": 1,
	
	"usunitednews.com": 1,
	
	"usus.cc": 1,
	
	"utopianpal.com": 1,
	
	"uu-gg.com": 1,
	
	"uvwxyz.xyz": 1,
	
	"uwants.com": 1,
	
	"uwants.net": 1,
	
	"uyghur-j.org": 1,
	
	"uyghur.co.uk": 1,
	
	"uyghuramerican.org": 1,
	
	"uyghurcanadiansociety.org": 1,
	
	"uyghurcongress.org": 1,
	
	"uyghurensemble.co.uk": 1,
	
	"uyghurpen.org": 1,
	
	"uyghurpress.com": 1,
	
	"uyghurstudies.org": 1,
	
	"uygur.fc2web.com": 1,
	
	"uygur.org": 1,
	
	"uymaarip.com": 1,
	
	"v2ex.com": 1,
	
	"v2ray.com": 1,
	
	"van001.com": 1,
	
	"van698.com": 1,
	
	"vanemu.cn": 1,
	
	"vanilla-jp.com": 1,
	
	"vanpeople.com": 1,
	
	"vansky.com": 1,
	
	"vatn.org": 1,
	
	"vcf-online.org": 1,
	
	"vcfbuilder.org": 1,
	
	"vds.rightster.com": 1,
	
	"vegas.williamhill.com": 1,
	
	"vegasred.com": 1,
	
	"velkaepocha.sk": 1,
	
	"venbbs.com": 1,
	
	"venchina.com": 1,
	
	"venetianmacao.com": 1,
	
	"ventureswell.com": 1,
	
	"veoh.com": 1,
	
	"vermonttibet.org": 1,
	
	"versavpn.com": 1,
	
	"verybs.com": 1,
	
	"vevo.com": 1,
	
	"vft.com.tw": 1,
	
	"viber.com": 1,
	
	"vica.info": 1,
	
	"victimsofcommunism.org": 1,
	
	"vid.me": 1,
	
	"vidble.com": 1,
	
	"video.aol.ca": 1,
	
	"video.aol.co.uk": 1,
	
	"video.aol.com": 1,
	
	"video.ap.org": 1,
	
	"video.fdbox.com": 1,
	
	"video.foxbusiness.com": 1,
	
	"video.pbs.org": 1,
	
	"video.yahoo.com": 1,
	
	"videobam.com": 1,
	
	"videodetective.com": 1,
	
	"videomega.tv": 1,
	
	"videomo.com": 1,
	
	"videopediaworld.com": 1,
	
	"videopress.com": 1,
	
	"vidinfo.org": 1,
	
	"vietdaikynguyen.com": 1,
	
	"vijayatemple.org": 1,
	
	"vimeo.com": 1,
	
	"vimperator.org": 1,
	
	"vincnd.com": 1,
	
	"vinniev.com": 1,
	
	"vip-enterprise.com": 1,
	
	"visibletweets.com": 1,
	
	"vital247.org": 1,
	
	"viu.com": 1,
	
	"viu.tv": 1,
	
	"vivahentai4u.net": 1,
	
	"vivatube.com": 1,
	
	"vivthomas.com": 1,
	
	"vizvaz.com": 1,
	
	"vjmedia.com.hk": 1,
	
	"vllcs.org": 1,
	
	"vlog.xuite.net": 1,
	
	"vmixcore.com": 1,
	
	"vn.hao123.com": 1,
	
	"vnet.link": 1,
	
	"voa-11.akacast.akamaistream.net": 1,
	
	"voacantonese.com": 1,
	
	"voachinese.com": 1,
	
	"voachineseblog.com": 1,
	
	"voagd.com": 1,
	
	"voanews.com": 1,
	
	"voatibetan.com": 1,
	
	"voatibetanenglish.com": 1,
	
	"vocativ.com": 1,
	
	"vocn.tv": 1,
	
	"vod.wwe.com": 1,
	
	"vot.org": 1,
	
	"vovo2000.com": 1,
	
	"voxer.com": 1,
	
	"voy.com": 1,
	
	"vpn.ac": 1,
	
	"vpn.cjb.net": 1,
	
	"vpn.cmu.edu": 1,
	
	"vpn.sv.cmu.edu": 1,
	
	"vpn4all.com": 1,
	
	"vpnaccount.org": 1,
	
	"vpnaccounts.com": 1,
	
	"vpnbook.com": 1,
	
	"vpncomparison.org": 1,
	
	"vpncoupons.com": 1,
	
	"vpncup.com": 1,
	
	"vpndada.com": 1,
	
	"vpnfan.com": 1,
	
	"vpnfire.com": 1,
	
	"vpnforgame.net": 1,
	
	"vpngate.jp": 1,
	
	"vpngate.net": 1,
	
	"vpngratis.net": 1,
	
	"vpnhq.com": 1,
	
	"vpninja.net": 1,
	
	"vpnintouch.com": 1,
	
	"vpnintouch.net": 1,
	
	"vpnjack.com": 1,
	
	"vpnmaster.com": 1,
	
	"vpnmentor.com": 1,
	
	"vpnpick.com": 1,
	
	"vpnpop.com": 1,
	
	"vpnpronet.com": 1,
	
	"vpnreactor.com": 1,
	
	"vpnreviewz.com": 1,
	
	"vpnsecure.me": 1,
	
	"vpnshazam.com": 1,
	
	"vpnshieldapp.com": 1,
	
	"vpnsp.com": 1,
	
	"vpntraffic.com": 1,
	
	"vpntunnel.com": 1,
	
	"vpnuk.info": 1,
	
	"vpnunlimitedapp.com": 1,
	
	"vpnvip.com": 1,
	
	"vpnworldwide.com": 1,
	
	"vporn.com": 1,
	
	"vpser.net": 1,
	
	"vraiesagesse.net": 1,
	
	"vrmtr.com": 1,
	
	"vtunnel.com": 1,
	
	"vuku.cc": 1,
	
	"w.idaiwan.com": 1,
	
	"w3schools.com": 1,
	
	"wa.me": 1,
	
	"waffle1999.com": 1,
	
	"wahas.com": 1,
	
	"waigaobu.com": 1,
	
	"waikeung.org": 1,
	
	"wailaike.net": 1,
	
	"waiwaier.com": 1,
	
	"wallmama.com": 1,
	
	"wallornot.org": 1,
	
	"wallpapercasa.com": 1,
	
	"wallproxy.com": 1,
	
	"waltermartin.com": 1,
	
	"waltermartin.org": 1,
	
	"wanderinghorse.net": 1,
	
	"wangafu.net": 1,
	
	"wangjinbo.org": 1,
	
	"wanglixiong.com": 1,
	
	"wango.org": 1,
	
	"wangruoshui.net": 1,
	
	"want-daily.com": 1,
	
	"wanz-factory.com": 1,
	
	"wapedia.mobi": 1,
	
	"warbler.iconfactory.net": 1,
	
	"waselpro.com": 1,
	
	"washeng.net": 1,
	
	"watch8x.com": 1,
	
	"watchinese.com": 1,
	
	"watchmygf.net": 1,
	
	"wattpad.com": 1,
	
	"wav.tv": 1,
	
	"waveprotocol.org": 1,
	
	"waymo.com": 1,
	
	"wda.gov.tw": 1,
	
	"wdf5.com": 1,
	
	"wearehairy.com": 1,
	
	"wearn.com": 1,
	
	"web2project.net": 1,
	
	"webbang.net": 1,
	
	"webevader.org": 1,
	
	"webfreer.com": 1,
	
	"webjb.org": 1,
	
	"weblagu.com": 1,
	
	"webmproject.org": 1,
	
	"webrtc.org": 1,
	
	"webrush.net": 1,
	
	"webs-tv.net": 1,
	
	"website.informer.com": 1,
	
	"websitepulse.com": 1,
	
	"webwarper.net": 1,
	
	"webworkerdaily.com": 1,
	
	"weekmag.info": 1,
	
	"wefightcensorship.org": 1,
	
	"wefong.com": 1,
	
	"weiboleak.com": 1,
	
	"weiboscope.jmsc.hku.hk": 1,
	
	"weihuo.org": 1,
	
	"weijingsheng.org": 1,
	
	"weiming.info": 1,
	
	"weiquanwang.org": 1,
	
	"weisuo.ws": 1,
	
	"welovecock.com": 1,
	
	"wemigrate.org": 1,
	
	"wengewang.com": 1,
	
	"wengewang.org": 1,
	
	"wenhui.ch": 1,
	
	"wenxuecity.com": 1,
	
	"wenyunchao.com": 1,
	
	"westca.com": 1,
	
	"westernshugdensociety.org": 1,
	
	"westernwolves.com": 1,
	
	"westkit.net": 1,
	
	"westpoint.edu": 1,
	
	"wetplace.com": 1,
	
	"wetpussygames.com": 1,
	
	"wexiaobo.org": 1,
	
	"wezhiyong.org": 1,
	
	"wezone.net": 1,
	
	"wforum.com": 1,
	
	"wha.la": 1,
	
	"whatblocked.com": 1,
	
	"whatbrowser.org": 1,
	
	"whatsapp.com": 1,
	
	"whatsapp.net": 1,
	
	"wheatseeds.org": 1,
	
	"wheelockslatin.com": 1,
	
	"whereiswerner.com": 1,
	
	"wheretowatch.com": 1,
	
	"whippedass.com": 1,
	
	"whispersystems.org": 1,
	
	"whitebear.freebearblog.org": 1,
	
	"whodns.xyz": 1,
	
	"whoer.net": 1,
	
	"whotalking.com": 1,
	
	"whylover.com": 1,
	
	"whyx.org": 1,
	
	"widevine.com": 1,
	
	"wikaba.com": 1,
	
	"wiki.cnitter.com": 1,
	
	"wiki.esu.im": 1,
	
	"wiki.gamerp.jp": 1,
	
	"wiki.jqueryui.com": 1,
	
	"wiki.keso.cn": 1,
	
	"wiki.moegirl.org": 1,
	
	"wiki.oauth.net": 1,
	
	"wiki.phonegap.com": 1,
	
	"wikileaks-forum.com": 1,
	
	"wikileaks.ch": 1,
	
	"wikileaks.com": 1,
	
	"wikileaks.de": 1,
	
	"wikileaks.eu": 1,
	
	"wikileaks.lu": 1,
	
	"wikileaks.org": 1,
	
	"wikileaks.pl": 1,
	
	"wikilivres.info": 1,
	
	"wikimapia.org": 1,
	
	"wikiwiki.jp": 1,
	
	"wildammo.com": 1,
	
	"willw.net": 1,
	
	"windowsphoneme.com": 1,
	
	"windscribe.com": 1,
	
	"wingamestore.com": 1,
	
	"wingy.site": 1,
	
	"winning11.com": 1,
	
	"winwhispers.info": 1,
	
	"wiredbytes.com": 1,
	
	"wiredpen.com": 1,
	
	"wireshark.org": 1,
	
	"wisdompubs.org": 1,
	
	"wisevid.com": 1,
	
	"withgoogle.com": 1,
	
	"witnessleeteaching.com": 1,
	
	"witopia.net": 1,
	
	"wizcrafts.net": 1,
	
	"wjbk.org": 1,
	
	"wlcnew.jigsy.com": 1,
	
	"wlx.sowiki.net": 1,
	
	"wn.com": 1,
	
	"wnacg.com": 1,
	
	"wnacg.org": 1,
	
	"wo.tc": 1,
	
	"wo3ttt.wordpress.com": 1,
	
	"woeser.com": 1,
	
	"woesermiddle-way.net": 1,
	
	"wokar.org": 1,
	
	"wolfax.com": 1,
	
	"woolyss.com": 1,
	
	"woopie.jp": 1,
	
	"woopie.tv": 1,
	
	"wordpress.com": 1,
	
	"workatruna.com": 1,
	
	"workerdemo.org.hk": 1,
	
	"workersthebig.net": 1,
	
	"worldcat.org": 1,
	
	"worldjournal.com": 1,
	
	"worldvpn.net": 1,
	
	"wow-life.net": 1,
	
	"wow.com": 1,
	
	"wowgirls.com": 1,
	
	"wowlegacy.ml": 1,
	
	"wowporn.com": 1,
	
	"wowrk.com": 1,
	
	"woxinghuiguo.com": 1,
	
	"woyaolian.org": 1,
	
	"wozy.in": 1,
	
	"wp.com": 1,
	
	"wpoforum.com": 1,
	
	"wqyd.org": 1,
	
	"wrchina.org": 1,
	
	"wretch.cc": 1,
	
	"writer.zoho.com": 1,
	
	"wsgzao.github.io": 1,
	
	"wsj.com": 1,
	
	"wsj.net": 1,
	
	"wsjhk.com": 1,
	
	"wtbn.org": 1,
	
	"wtfpeople.com": 1,
	
	"wuerkaixi.com": 1,
	
	"wufafangwen.com": 1,
	
	"wufi.org.tw": 1,
	
	"wuguoguang.com": 1,
	
	"wujie.net": 1,
	
	"wujieliulan.com": 1,
	
	"wukangrui.net": 1,
	
	"wuu.wikipedia.org": 1,
	
	"wuw.red": 1,
	
	"wwitv.com": 1,
	
	"www.abclite.net": 1,
	
	"www.ajsands.com": 1,
	
	"www.americorps.gov": 1,
	
	"www.antd.org": 1,
	
	"www.aolnews.com": 1,
	
	"www.businessinsider.com.au": 1,
	
	"www.citizenlab.org": 1,
	
	"www.cmoinc.org": 1,
	
	"www.cool18.com": 1,
	
	"www.dmm.com": 1,
	
	"www.dwheeler.com": 1,
	
	"www.eastturkistan.net": 1,
	
	"www.ftchinese.com": 1,
	
	"www.gmiddle.com": 1,
	
	"www.gmiddle.net": 1,
	
	"www.hustlercash.com": 1,
	
	"www.idlcoyote.com": 1,
	
	"www.imdb.com": 1,
	
	"www.kindleren.com": 1,
	
	"www.klip.me": 1,
	
	"www.lamenhu.com": 1,
	
	"www.lib.virginia.edu": 1,
	
	"www.linksalpha.com": 1,
	
	"www.m-sport.co.uk": 1,
	
	"www.metro.taipei": 1,
	
	"www.monlamit.org": 1,
	
	"www.moztw.org": 1,
	
	"www.nbc.com": 1,
	
	"www.orchidbbs.com": 1,
	
	"www.owind.com": 1,
	
	"www.oxid.it": 1,
	
	"www.powerpointninja.com": 1,
	
	"www.s4miniarchive.com": 1,
	
	"www.sciencemag.org": 1,
	
	"www.shadowsocks.com": 1,
	
	"www.shwchurch.org": 1,
	
	"www.skype.com": 1,
	
	"www.tablesgenerator.com": 1,
	
	"www.taiwanonline.cc": 1,
	
	"www.taup.org.tw": 1,
	
	"www.thechinastory.org": 1,
	
	"www.wan-press.org": 1,
	
	"www.wangruowang.org": 1,
	
	"www.websnapr.com": 1,
	
	"www.zensur.freerk.com": 1,
	
	"www1.american.edu": 1,
	
	"www1.biz": 1,
	
	"www2.ohchr.org": 1,
	
	"www2.rocketbbs.com": 1,
	
	"wwwhost.biz": 1,
	
	"wzyboy.im": 1,
	
	"x-art.com": 1,
	
	"x-berry.com": 1,
	
	"x-wall.org": 1,
	
	"x1949x.com": 1,
	
	"x24hr.com": 1,
	
	"x365x.com": 1,
	
	"xa.yimg.com": 1,
	
	"xanga.com": 1,
	
	"xbabe.com": 1,
	
	"xbookcn.com": 1,
	
	"xcafe.in": 1,
	
	"xcity.jp": 1,
	
	"xcritic.com": 1,
	
	"xda-developers.com": 1,
	
	"xerotica.com": 1,
	
	"xfinity.com": 1,
	
	"xfm.pp.ru": 1,
	
	"xgmyd.com": 1,
	
	"xhamster.com": 1,
	
	"xianchawang.net": 1,
	
	"xianjian.tw": 1,
	
	"xianqiao.net": 1,
	
	"xiaobaiwu.com": 1,
	
	"xiaochuncnjp.com": 1,
	
	"xiaod.in": 1,
	
	"xiaohexie.com": 1,
	
	"xiaolan.me": 1,
	
	"xiaoma.org": 1,
	
	"xiezhua.com": 1,
	
	"xihua.es": 1,
	
	"xing.com": 1,
	
	"xinhuanet.org": 1,
	
	"xinmiao.com.hk": 1,
	
	"xinqimeng.over-blog.com": 1,
	
	"xinsheng.net": 1,
	
	"xinshijue.com": 1,
	
	"xinyubbs.net": 1,
	
	"xiongpian.com": 1,
	
	"xiuren.org": 1,
	
	"xizang-zhiye.org": 1,
	
	"xjp.cc": 1,
	
	"xjtravelguide.com": 1,
	
	"xkiwi.tk": 1,
	
	"xlfmtalk.com": 1,
	
	"xlfmwz.info": 1,
	
	"xml-training-guide.com": 1,
	
	"xmovies.com": 1,
	
	"xn--4gq171p.com": 1,
	
	"xn--czq75pvv1aj5c.org": 1,
	
	"xn--i2ru8q2qg.com": 1,
	
	"xn--ngstr-lra8j.com": 1,
	
	"xn--p8j9a0d9c9a.xn--q9jyb4c": 1,
	
	"xnxx.com": 1,
	
	"xpdo.net": 1,
	
	"xpud.org": 1,
	
	"xrentdvd.com": 1,
	
	"xskywalker.com": 1,
	
	"xskywalker.net": 1,
	
	"xtube.com": 1,
	
	"xuchao.net": 1,
	
	"xuchao.org": 1,
	
	"xuzhiyong.net": 1,
	
	"xvideo.cc": 1,
	
	"xvideos.com": 1,
	
	"xvideos.es": 1,
	
	"xxbbx.com": 1,
	
	"xxlmovies.com": 1,
	
	"xxuz.com": 1,
	
	"xxx.com": 1,
	
	"xxx.xxx": 1,
	
	"xxxfuckmom.com": 1,
	
	"xxxx.com.au": 1,
	
	"xxxy.biz": 1,
	
	"xxxy.info": 1,
	
	"xxxymovies.com": 1,
	
	"xys.dxiong.com": 1,
	
	"xys.org": 1,
	
	"xysblogs.org": 1,
	
	"xyy69.com": 1,
	
	"xyy69.info": 1,
	
	"yahoo.com.hk": 1,
	
	"yakbutterblues.com": 1,
	
	"yam.com": 1,
	
	"yam.org.tw": 1,
	
	"yanghengjun.com": 1,
	
	"yangjianli.com": 1,
	
	"yasni.co.uk": 1,
	
	"yayabay.com": 1,
	
	"ydy.com": 1,
	
	"yeahteentube.com": 1,
	
	"yecl.net": 1,
	
	"yeelou.com": 1,
	
	"yeeyi.com": 1,
	
	"yegle.net": 1,
	
	"yes-news.com": 1,
	
	"yes.xxx": 1,
	
	"yes123.com.tw": 1,
	
	"yesasia.com": 1,
	
	"yesasia.com.hk": 1,
	
	"yespornplease.com": 1,
	
	"yeyeclub.com": 1,
	
	"ygto.com": 1,
	
	"yhcw.net": 1,
	
	"yibada.com": 1,
	
	"yibaochina.com": 1,
	
	"yidio.com": 1,
	
	"yilubbs.com": 1,
	
	"yingsuoss.com": 1,
	
	"yinlei.org": 1,
	
	"yipub.com": 1,
	
	"yizhihongxing.com": 1,
	
	"yobt.com": 1,
	
	"yobt.tv": 1,
	
	"yogichen.org": 1,
	
	"yong.hu": 1,
	
	"yorkbbs.ca": 1,
	
	"youdontcare.com": 1,
	
	"youjizz.com": 1,
	
	"youmaker.com": 1,
	
	"youngpornvideos.com": 1,
	
	"youngspiration.hk": 1,
	
	"youpai.org": 1,
	
	"youporn.com": 1,
	
	"youporngay.com": 1,
	
	"your-freedom.net": 1,
	
	"yourepeat.com": 1,
	
	"yourlisten.com": 1,
	
	"yourlust.com": 1,
	
	"yourprivatevpn.com": 1,
	
	"yourtrap.com": 1,
	
	"yousendit.com": 1,
	
	"youshun12.com": 1,
	
	"youthnetradio.org": 1,
	
	"youtu.be": 1,
	
	"youtube-nocookie.com": 1,
	
	"youtube.com": 1,
	
	"youtubecn.com": 1,
	
	"youtubeeducation.com": 1,
	
	"youtubegaming.com": 1,
	
	"youversion.com": 1,
	
	"youxu.info": 1,
	
	"yt.be": 1,
	
	"ytht.net": 1,
	
	"ytimg.com": 1,
	
	"ytn.co.kr": 1,
	
	"yuanming.net": 1,
	
	"yuanzhengtang.org": 1,
	
	"yulghun.com": 1,
	
	"yunchao.net": 1,
	
	"yuvutu.com": 1,
	
	"yvesgeleyn.com": 1,
	
	"ywpw.com": 1,
	
	"yx51.net": 1,
	
	"yyii.org": 1,
	
	"yzzk.com": 1,
	
	"zacebook.com": 1,
	
	"zalmos.com": 1,
	
	"zannel.com": 1,
	
	"zaobao.com.sg": 1,
	
	"zaozon.com": 1,
	
	"zapto.org": 1,
	
	"zattoo.com": 1,
	
	"zdnet.com.tw": 1,
	
	"zello.com": 1,
	
	"zengjinyan.org": 1,
	
	"zenmate.com": 1,
	
	"zenmate.com.ru": 1,
	
	"zeronet.io": 1,
	
	"zeutch.com": 1,
	
	"zfreet.com": 1,
	
	"zgsddh.com": 1,
	
	"zgzcjj.net": 1,
	
	"zh-yue.wikipedia.org": 1,
	
	"zh.ecdm.wikia.com": 1,
	
	"zh.m.wikipedia.org": 1,
	
	"zh.pokerstrategy.com": 1,
	
	"zh.uncyclopedia.wikia.com": 1,
	
	"zh.wikinews.org": 1,
	
	"zh.wikipedia.org": 1,
	
	"zh.wikisource.org": 1,
	
	"zhanbin.net": 1,
	
	"zhangboli.net": 1,
	
	"zhangtianliang.com": 1,
	
	"zhao.1984.city": 1,
	
	"zhao.jinhai.de": 1,
	
	"zhenghui.org": 1,
	
	"zhengwunet.org": 1,
	
	"zhenlibu.info": 1,
	
	"zhenlibu1984.com": 1,
	
	"zhenxiang.biz": 1,
	
	"zhinengluyou.com": 1,
	
	"zhongguo.ca": 1,
	
	"zhongguorenquan.org": 1,
	
	"zhongguotese.net": 1,
	
	"zhongmeng.org": 1,
	
	"zhreader.com": 1,
	
	"zhuangbi.me": 1,
	
	"zhuanxing.cn": 1,
	
	"zhuatieba.com": 1,
	
	"zhuichaguoji.org": 1,
	
	"ziddu.com": 1,
	
	"zillionk.com": 1,
	
	"zim.vn": 1,
	
	"zinio.com": 1,
	
	"ziporn.com": 1,
	
	"zkaip.com": 1,
	
	"zmw.cn": 1,
	
	"zodgame.us": 1,
	
	"zomobo.net": 1,
	
	"zonaeuropa.com": 1,
	
	"zonghexinwen.com": 1,
	
	"zonghexinwen.net": 1,
	
	"zoogvpn.com": 1,
	
	"zootool.com": 1,
	
	"zoozle.net": 1,
	
	"zozotown.com": 1,
	
	"zpn.im": 1,
	
	"zshare.net": 1,
	
	"zsrhao.com": 1,
	
	"zuo.la": 1,
	
	"zuobiao.me": 1,
	
	"zuola.com": 1,
	
	"zvereff.com": 1,
	
	"zynaima.com": 1,
	
	"zynamics.com": 1,
	
	"zyns.com": 1,
	
	"zyzc9.com": 1,
	
	"zzcartoon.com": 1,
	
	"zzux.com": 1,
	
};



var cidrs = [
    
    [757170176,757174271],
	
    [1089052672,1089060863],
	
    [1113980928,1113985023],
	
    [1123635200,1123639295],
	
    [1208926208,1208942591],
	
    [1249705984,1249771519],
	
    [1533805568,1533806591],
	
    [1533806592,1533808639],
	
    [1533809664,1533810687],
	
    [1533813760,1533814783],
	
    [1533818880,1533819903],
	
    [1702874624,1702875135],
	
    [1702875136,1702875647],
	
    [1806835712,1806839807],
	
    [1823541248,1823543295],
	
    [1844415488,1844415743],
	
    [2509938688,2509942783],
	
    [2915172352,2915237887],
	
    [3512041472,3512074239],
	
    [3627728896,3627737087],
	
    [3639549952,3639558143],
	
];


function ip2decimal(ip) {
    var d = ip.split('.');
    return ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
}

function FindProxyForURL(url, host){
    if(/\d+\.\d+\.\d+\.\d+/.test(host)){
        if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
                isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
                isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0") ||
                isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0")){
            return "DIRECT";
        }
        
        var d = ip2decimal(host);
        var l = cidrs.length;
        var min = 0;
        var max = l;
        for(;;){
            if (min+1 > max) {
                break;
            }
            var mid = Math.floor(min+(max-min)/2);
            if(d >= cidrs[mid][0] && d <= cidrs[mid][1]){
				if(mode == "white"){
					return "DIRECT";
				}
				if(mode == "black"){
					return proxy;
				}
            }else if(d < cidrs[mid][0]){
                max = mid;
            }else{
                min = mid+1;
            }
        }
		
    }

    if (isPlainHostName(host)){
        return "DIRECT";
    }

    
    var a = host.split(".");
    for(var i=a.length-1; i>=0; i--){
        if (domains.hasOwnProperty(a.slice(i).join("."))){
			if(mode == "white"){
				return "DIRECT";
			}
			if(mode == "black"){
				return proxy;
			}
        }
    }
	if(mode == "white"){
		return proxy;
	}
	if(mode == "black"){
		return "DIRECT";
	}
	

	if(mode == "global"){
		return proxy;
	}
}
