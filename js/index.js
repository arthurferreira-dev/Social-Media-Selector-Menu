let divList = document.getElementById('lista');
let title = document.getElementById('pad');
let icon = document.getElementById('angle');
var clicks = false;

/* More details */
let divhistory = document.getElementById('history');
let MediaName = document.getElementById('name-media'); // Nome da rede social
let ServeMedia = document.getElementById('server-media'); // Pra que serve está rede social?
let DateMedia = document.getElementById('fund-media'); // Fundação da rede social?
let QuemMedia = document.getElementById('qfund-media'); // Quem fundou a rede social?
let NotaMedia = document.getElementById('nota') // Nota da Rede Social segundo o ChatGPT

function MenuAction() {
    if (!clicks) {
        icon.className = 'fa-solid fa-angle-down'
        divList.style.display = 'block'
        clicks = true
    } else {
        icon.className = 'fa-solid fa-angle-up'
        divList.style.display = 'none'
        clicks = false
    }
}

function Facebook() {
    title.innerHTML = '<span class="facebook" style="padding-right: 4px"><i class="fa-brands fa-facebook"></i></span> Facebook'
    PageFace();
}

function Linkedin() {
    title.innerHTML = '<span class="linkedin" style="padding-right: 4px"><i class="fa-brands fa-linkedin"></i></span> Linkedin'
    PageLinke();
}

function Github() {
    title.innerHTML = '<span class="github" style="padding-right: 4px"><i class="fa-brands fa-github"></i></span> Github'
    GithubPages();
}

function Twitch() {
    title.innerHTML = '<span class="twitch" style="padding-right: 4px"><i class="fa-brands fa-twitch"></i></span> Twitch'
    PageTwitch();
}

function Threads() {
    title.innerHTML = '<span class="threads" style="padding-right: 4px"><i class="fa-brands fa-threads"></i></span> Threads'
    PagesThreads()
}

function Xbox() {
    title.innerHTML = '<span class="xbox" style="padding-right: 4px"><i class="fa-brands fa-xbox"></i></span> Xbox'
    PageXbox();
}

function Spotify() {
    title.innerHTML = '<span class="spotify" style="padding-right: 4px"><i class="fa-brands fa-spotify"></i></span> Spotify'
    PagePremium();
}

function PageFace() {
    const name = 'Facebook'
    const note = '8/10'
    MediaName.innerHTML = `<strong>${name}</strong>`
    ServeMedia.innerHTML = `O ${name} serve para compartilhar textos, fotos, vídeos e links e várias outras coisas como criar grupos e comunidades, também é usado para contatos profissionais e comerciais.`
    DateMedia.innerHTML = 'Foi fundado em 4 de fevereiro de 2004'
    QuemMedia.innerHTML = 'Fundado por Mark Zuckerberg, junto com colegas da <strong>Universidade de Harvard</strong> (Eduardo Saverin, Andrew McCollum, Dustin Moskovitz e Chris Hughes)'
    NotaMedia.innerHTML = `${note}`
    divhistory.style.display = 'block'
}

function PageLinke() {
    const name = 'Linkedin'
    const note = '8.5/10'
    MediaName.innerHTML = `<strong>${name}</strong>`
    ServeMedia.innerHTML = `O ${name} serve para conectar profissionais de diversas áreas, compartilhar experiências e conquistas profissionais, buscar empregos e recrutar talentos e mais sobre contatos profissionais e empresárias.`
    DateMedia.innerHTML = 'Fundado em 5 de maio de 2003'
    QuemMedia.innerHTML = 'Reid Hoffman e mais um <strong>grupo de cofundadores</strong> (Allen Blue, Konstantin Guericke, Eric Ly e Jean-Luc Vaillant)'
    NotaMedia.innerHTML = note
    divhistory.style.display = 'block'
}

function GithubPages() {
    const name = 'Github'
    const note = '9/10'
    MediaName.innerHTML = `<strong>${name}</strong>`
    ServeMedia.innerHTML = `O ${name} é uma plataforma de hospedagem de código-fonte e colaboração baseada em Git (um sistema de controle de versão). É usado para hospedar repositórios de código, controlar versões de arquivos e acompanhar mudanças, colaborar em projetos com outros desenvolvedores, gerenciar bugs, tarefas e documentação e  compartilhar código abertamente (código open source) ou de forma privada`
    DateMedia.innerHTML = 'Fundado em abril de 2008'
    QuemMedia.innerHTML = 'Tom Preston-Werner, Chris Wanstrath, PJ Hyett e Scott Chacon. Em 2018, o GitHub foi adquirido pela Microsoft por US$ 7,5 bilhões.'
    NotaMedia.innerHTML = note
    divhistory.style.display = 'block'
}

function PageTwitch() {
    const name = 'Twitch'
    const note = '8.5/10'
    MediaName.innerHTML = `<strong>${name}</strong>`
    ServeMedia.innerHTML = `A ${name} é uma plataforma de streaming ao vivo, voltada principalmente para, transmissões de jogos ao vivo, streams de música, arte, bate-papo e conteúdo criativo, interação em tempo real entre streamers e espectadores via chat e monetização de conteúdo com doações, inscrições e anúncios`
    DateMedia.innerHTML = `A ${name} foi lançada em junho de 2011`
    QuemMedia.innerHTML = `Foi criada como um projeto derivado da plataforma Justin.tv, por, Justin Kan, Emmett Shear e a equipe da Justin.tv. A ${name} foi comprada pela Amazon em 2014, por cerca de US$ 970 milhões.`
    NotaMedia.innerHTML = note
    divhistory.style.display = 'block'
}

function PagesThreads() {
    const name = 'Threads'
    const note = '7.5/10'
    MediaName.innerHTML = `<strong>${name}</strong>`
    ServeMedia.innerHTML = `O ${name} é uma rede social de microblogging, muito parecida com o Twitter (X). Ele serve para compartilhar textos curtos, imagens e vídeos, participar de conversas públicas em tempo real, seguir criadores, marcas e amigos, interagir com postagens (curtir, comentar, repostar)`
    DateMedia.innerHTML = 'Lançado em 5 de julho de 2023'
    QuemMedia.innerHTML = 'Desenvolvido pela Meta (empresa dona do Facebook, Instagram e WhatsApp), sob liderança de Mark Zuckerberg.'
    NotaMedia.innerHTML = note
    divhistory.style.display = 'block'
}

function PageXbox() {
    const name = 'Xbox'
    const note = '9/10'
    MediaName.innerHTML = `<strong>${name}</strong>`
    ServeMedia.innerHTML = `A rede ${name}, chamada ${name} Live, serve para conectar jogadores do mundo todo. Ela permite, jogar online com outras pessoas, baixar jogos, atualizações e conteúdo adicional, usar apps de entretenimento (como Netflix, YouTube), comprar jogos e itens digitais pela Microsoft Store, conversar por voz com amigos (chat de voz e party).`
    DateMedia.innerHTML = `A marca ${name} foi lançada em 15 de novembro de 2001, junto com o primeiro console. A ${name} Live (rede online) foi lançada em 2002.`
    QuemMedia.innerHTML = `A ${name} foi criada por uma equipe da Microsoft, liderada por engenheiros como Seamus Blackley, que propuseram a ideia de criar um console de videogame. A rede ${name} Live foi desenvolvida internamente pela Microsoft, aproveitando sua experiência com infraestrutura online.`
    NotaMedia.innerHTML = note
    divhistory.style.display = 'block'
}

function PagePremium() {
    const name = 'Spotify'
    const note = '9/10'
    MediaName.innerHTML = `<strong>${name}</strong>`
    ServeMedia.innerHTML = `O ${name} é uma plataforma de streaming de música, podcasts e audiolivros. A plataforma permite que usuários, ouçam músicas sob demanda (mais de 100 milhões de faixas), criem playlists personalizadas, descubram novas músicas com base em algoritmos inteligentes, acompanhem artistas e compartilhem conteúdo, acessem podcasts exclusivos, ouçam offline (com plano premium).`
    DateMedia.innerHTML = `O ${name} foi fundado em abril de 2006. Lançado oficialmente em outubro de 2008, na Suécia.`
    QuemMedia.innerHTML = 'Daniel Ek (atual CEO) e Martin Lorentzon'
    NotaMedia.innerHTML = note
    divhistory.style.display = 'block'
}