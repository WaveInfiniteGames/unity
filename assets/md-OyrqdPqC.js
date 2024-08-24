import{_ as h}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-MQhIjARW.js";import{o as k,c as p,k as a,l as r,m as c,q as o,s as d,B as e,e as s,aa as i}from"./modules/vue-9M24w38T.js";import{I as D}from"./slidev/default-BipQYVCE.js";import{u as E,f as g}from"./slidev/context-qB6h4SFG.js";import"./modules/unplugin-icons-k6D-q1La.js";import"./index-CnK1U9Ny.js";import"./modules/shiki-D165QSPi.js";const A=s("h1",null,"弾の方向と速さのコード",-1),y=s("p",null,"コードを書いたらctrl + S, またはFile → Save Bullet.csで保存。その後、Unityに戻る。",-1),m=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"using System.Collections;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"using System.Collections.Generic;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"using UnityEngine;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"public class Bullet : MonoBehaviour")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    //弾の動く速さ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    public float speed = 50f;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    private Rigidbody2D rb;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    // ゲームを走らせたとき、最初だけ読まれるコードである。（Scratchでいう「緑の旗が押されたとき」のブロック）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    void Start()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"        rb = GetComponent"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"Rigidbody2D"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"        rb.velocity = new Vector2(0, speed);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    }")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    // Update is called once per frame")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    void Update()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")])])],-1),B={__name:"slides.md__slidev_24",setup(C){const{$slidev:_,$nav:f,$clicksContext:n,$clicks:u,$page:v,$renderContext:b,$frontmatter:l}=E();return n.setup(),($,x)=>{const t=h;return k(),p(D,o(d(e(g)(e(l),23))),{default:a(()=>[A,y,r(t,c({},{ranges:[]}),{default:a(()=>[m]),_:1},16)]),_:1},16)}}},F=B;export{F as default};
