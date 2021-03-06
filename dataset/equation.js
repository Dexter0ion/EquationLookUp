var edata = [
    {
        "eid": "1",
        "etype": "RATH",
        "ename": "RATH",
        "equation": [
            ["diff(u(x,t),t)+u(x,t)*diff(u(x,t),x)+p*diff(u(x,t),x$3)=0", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +u \\left( x,t \\right) {\\frac {\\partial }{\\partial x}}u \\left( x,t \\right) +p{\\frac {\\partial }{\\partial \\mbox {} \\left( x,3 \\right) }}u \\left( x,t \\right) =0"],
            ["diff(u(x,t),t)+u(x,t)*diff(u(x,t),x)-p*diff(u(x,t),x$2)+q*diff(u(x,t),x$3)=0", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +u \\left( x,t\\right) {\\frac {\\partial }{\\partial x}}u \\left( x,t \\right) -p{\\frac {\\partial ^{2}}{\\partial {x}^{2}}}u \\left( x,t \\right) +q{\\frac {\\partial ^{3}}{\\partial {x}^{3}}}u \\left( x,t \\right) =0"],
            ["diff(u(x,t),t)+alpha*diff(u(x,t),t)*diff(u(x,t),x$2)+beta*u(x,t)*diff(u(x,t),x$3)=0", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +\\alpha\\, \\left( {\\frac {\\partial }{\\partial t}}u \\left( x,t \\right)  \\right) {\\frac {\\partial ^{2}}{\\partial {x}^{2}}}u \\left( x,t \\right) +\\beta\\,u\\left( x,t \\right) {\\frac {\\partial ^{3}}{\\partial {x}^{3}}}u \\left( x,t \\right) =0"],
            ["diff(u(x,t),t)+u(x,t)*diff(u(x,t),x$3)+p*diff(u(x,t),x)*diff(u(x,t),x$2)+q*u(x,t)^2*diff(u(x,t),x)+diff(u(x,t),x$5)=0", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +u \\left( x,t\\right) {\\frac {\\partial ^{3}}{\\partial {x}^{3}}}u \\left( x,t\\right) +p \\left( {\\frac {\\partial }{\\partial x}}u \\left( x,t\\right)  \\right) {\\frac {\\partial ^{2}}{\\partial {x}^{2}}}u \\left( x,t \\right) +q \\left( u \\left( x,t \\right)  \\right) ^{2}{\\frac {\\partial }{\\partial x}}u \\left( x,t \\right) +{\\frac {\\partial ^{5}}{\\partial {x}^{5}}}u \\left( x,t \\right) =0"]
        ],
        "desc": "Real Automated TanH-function method"
    },

    {
        "eid": "2",
        "etype": "IRATH",
        "ename": "IRATH",
        "equation": [
            ["diff(u(x,t),t)+u(x,t)*diff(u(x,t),x)+p*diff(u(x,t),x$3)=0", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +u \\left( x,t\\right) {\\frac {\\partial }{\\partial x}}u \\left( x,t \\right) +p{\\frac {\\partial }{\\partial \\mbox {} \\left( x,3 \\right) }}u \\left( x,t \\right) =0"],
            ["diff(u(x,t),t)+u(x,t)*diff(u(x,t),x)-p*diff(u(x,t),x$2)+q*diff(u(x,t),x$3)=0", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +u \\left( x,t\\right) {\\frac {\\partial }{\\partial x}}u \\left( x,t \\right) -p{\\frac {\\partial ^{2}}{\\partial {x}^{2}}}u \\left( x,t \\right) +q{\\frac {\\partial ^{3}}{\\partial {x}^{3}}}u \\left( x,t \\right) =0"],
            ["diff(u(x,t),t)+alpha*diff(u(x,t),t)*diff(u(x,t),x$2)+beta*u(x,t)*diff(u(x,t),x$3)=0", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +\\alpha\\, \\left( {\\frac {\\partial }{\\partial t}}u \\left( x,t \\right)  \\right) {\\frac {\\partial ^{2}}{\\partial {x}^{2}}}u \\left( x,t \\right) +\\beta\\,u\\left( x,t \\right) {\\frac {\\partial ^{3}}{\\partial {x}^{3}}}u \\left( x,t \\right) =0"],
            ["diff(u(x,t),t)+u(x,t)*diff(u(x,t),x$3)+p*diff(u(x,t),x)*diff(u(x,t),x$2)+q*u(x,t)^2*diff(u(x,t),x)+diff(u(x,t),x$5)=0", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +u \\left( x,t\\right) {\\frac {\\partial ^{3}}{\\partial {x}^{3}}}u \\left( x,t\\right) +p \\left( {\\frac {\\partial }{\\partial x}}u \\left( x,t\\right)  \\right) {\\frac {\\partial ^{2}}{\\partial {x}^{2}}}u \\left( x,t \\right) +q \\left( u \\left( x,t \\right)  \\right) ^{2}{\\frac {\\partial }{\\partial x}}u \\left( x,t \\right) +{\\frac {\\partial ^{5}}{\\partial {x}^{5}}}u \\left( x,t \\right) =0"]
        ],
        "desc": "Improved Real Automated TanH-function method"
    },
    {


        "eid": "3",
        "etype": "RAEEM",
        "ename": "RAEEM",
        "equation": [
            ["[diff(u(x,y,z,t),t)+u(x,y,z,t)^2*diff(u(x,y,z,t),x)+diff(u(x,y,z,t),x$3)+diff(u(x,y,z,t),x,y,y)+diff(u(x,y,z,t),x,z,z)=0],3,3", "{\\frac {\\partial }{\\partial t}}u \\left( x,y,z,t \\right) + \\left( u\\left( x,y,z,t \\right)  \\right) ^{2}{\\frac {\\partial }{\\partial x}}u\\left( x,y,z,t \\right) +{\\frac {\\partial }{\\partial \\mbox {{\\tt `\\$`}} \\left( x,3 \\right) }}u \\left( x,y,z,t \\right) +{\\frac {\\partial ^{3}}{\\partial {y}^{2}\\partial x}}u \\left( x,y,z,t \\right) +{\\frac {\\partial ^{3}}{\\partial {z}^{2}\\partial x}}u \\left( x,y,z,t \\right) =0]"],
            ["[diff(u(x,t),t)+3*v(x,t)*diff(v(x,t),x)=0,diff(v(x,t),t)+2*diff(v(x,t),x$3)+2*u(x,t)*diff(v(x,t),x)+diff(u(x,t),x)*v(x,t)=0]", ""],
            ["[diff(u(x,y,z,t),t)+u(x,y,z,t)^2*diff(u(x,y,z,t),x)+diff(u(x,y,z,t),x$3)+diff(u(x,y,z,t),x,y,y)+diff(u(x,y,z,t),x,z,z)=0],3,3", ""]
        ],
        "desc": "Real Automated Elliptic Equation Method"
    },
    {
        "eid": "4",
        "etype": "SEMPS",
        "ename": "SEMPS",
        "equation": [
            ["[diff(u(x,t),t)+u(x,t)*diff(u(x,t),x)+p*diff(u(x,t),x$3)=0],[diff(f(x),x)=R*g(x)^2,diff(g(x),x)=mu*g(x)*f(x),g(x)^2=s+R*f(x)^2],[f(x),g(x)]", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +u \\left( x,t\\right) {\\frac {\\partial }{\\partial x}}u \\left( x,t \\right) +p{\\frac {\\partial ^{3}}{\\partial {x}^{3}}}u \\left( x,t \\right) =0"],
            ["[diff(u(x, t), t)+u(x, t)*(diff(u(x, t), x))+p*diff(u(x, t), x$3) = 0],[diff(f(x), x) = g(x)*h(x), diff(g(x), x) = -f(x)*h(x), diff(h(x), x) = -n^2*g(x)*f(x), g(x)^2 = 1-f(x)^2, h(x)^2 = 1-n^2*f(x)^2],[f(x), g(x), h(x)]", ""],
        ],
        "desc": "Sub Eq Method and Polynomial Solutions"
    },
    {
        "eid": "5",
        "etype": "AutoBT",
        "ename": "AutoBT",
        "equation": [
            ["diff(w(x,t),t)-6*w(x,t)*diff(w(x,t),x)+diff(w(x,t),x$3)", "{\\frac {\\partial }{\\partial t}}w \\left( x,t \\right) -6\\,w \\left( x,t\\right) {\\frac {\\partial }{\\partial x}}w \\left( x,t \\right) +{\\frac {\\partial ^{3}}{\\partial {x}^{3}}}w \\left( x,t \\right) "],
            ["diff(w(x,t),t)+p*w(x,t)^2*diff(w(x,t),x)+diff(w(x,t),x$3)", ""]
        ],
        "desc": "Automated Bäcklund Transformation method"
    },
    {
        "eid": "6",
        "etype": "CRE",
        "ename": "CRE",
        "equation": [
            ["diff(w(x,t),t)-6*w(x,t)*diff(w(x,t),x)+diff(w(x,t),x$3)", "{\\frac {\\partial }{\\partial t}}w \\left( x,t \\right) -6\\,w \\left( x,t\\right) {\\frac {\\partial }{\\partial x}}w \\left( x,t \\right) +{\\frac {\\partial ^{3}}{\\partial {x}^{3}}}w \\left( x,t \\right) "],
            ["[diff(u(x,t),t)+u(x,t)*diff(u(x,t),x)+diff(v(x,t),x)=0,diff(v(x,t),t)+diff(u(x,t),x)+diff(u(x,t)*v(x,t),x)+diff(u(x,t),x,x,x)=0]", ""]
        ],
        "desc": "Automated Consistent Riccati Expansion Method"
    },
    {
        "eid": "7",
        "etype": "ADSP",
        "ename": "ADSP",
        "equation": [
            ["[diff(u(x, t), t)+6*u(x, t)*diff(u(x, t), x)+diff(u(x, t), x$3) = 0]", "{\\frac {\\partial }{\\partial t}}u \\left( x,t \\right) +6\\,u \\left( x,t\\right) {\\frac {\\partial }{\\partial x}}u \\left( x,t \\right) +{\\frac {\\partial ^{3}}{\\partial {x}^{3}}}u \\left( x,t \\right) =0"],
            ["[diff(u(x, t), t$2)-diff(u(x, t), x$2)-diff(u(x, t), x$4)-3*diff(u(x, t)^2, x$2) = 0]", ""],
            ["[diff(u(x, t), t)-(1/4)*diff(u(x, t), x$5)-5*diff(u(x, t), x)*diff(u(x, t), x$2)-(5/2)*u(x, t)*diff(u(x, t), x$3)-(15/2)*u(x, t)^2*diff(u(x, t), x) = 0]", ""],
            ["[diff(u(x, t), t)-6*u(x, t)*diff(u(x, t), x)+diff(u(x, t), x, x, x)-6*v(x, t)*diff(v(x, t), x) = 0, diff(v(x, t), t)-6*diff(u(x, t)*v(x, t), x)+diff(v(x, t), x, x, x) = 0]", ""]
        ],
        "desc": "Automated Derivation Solutions for PDE"
    },
    {
        "eid": "8",
        "etype": "ADMP",
        "ename": "ADMP",
        "equation": [
            ["[diff(y(x),x$2)=3/4*y(x)+y(x/2)-x^2+2],[y(0)=0,D(y)(0)=0],[y(x)],output=plot,err=true,x=0..1,y=0..1,index=15,pade=[7,7]", "{\\frac {{\\rm d}^{2}}{{\\rm d}{x}^{2}}}y \\left( x \\right) =3/4\\,y\\left( x \\right) +y \\left( x/2 \\right) -{x}^{2}+2 "],
            ["[diff(y(t),t$alpha)+y(t)=0],[y(0)=1,D(y)(0)=0],alpha=1.3,index=50,output=plot,t=0..20,y=-0.2..1,pade=[150,150]", ""],
        ],
        "desc": "Adomian Decomposition Method Package"
    },
    {
        "eid": "9",
        "etype": "CharSets",
        "ename": "CharSets",
        "equation": [
            ["[x+2*y-3*z-5,  y+4*z-2,  2*x-y+z-1],{x,y,z}", "x+2\\,y-3\\,z-5,y+4\\,z-2"],
            ["[2*x^2+x*y-y+1, -3*x*y+2*y^2-x-2, -3*x*y^2+2*y^3+2*x^2-3*y+1],[x,y]", ""],
        ],
        "desc": "A implementation of Ritt-Wu's characteristic sets method"
    },
    {
        "eid": "10",
        "etype": "wsolve",
        "ename": "wsolve",
        "equation": [
            ["[x+2*y-3*z-5,  y+4*z-2,  2*x-y+z-1],{x,y,z}", "x+2\\,y-3\\,z-5,y+4\\,z-2"],
            ["[2*x^2+x*y-y+1, -3*x*y+2*y^2-x-2, -3*x*y^2+2*y^3+2*x^2-3*y+1],[x,y]", ""]
        ],
        "desc": "Nonlinear algebraic system solver developed by Dingkang Wang of KLMM"
    }

]

