import{_ as k}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-MQhIjARW.js";import{o,c as r,k as n,l as c,m as d,q as D,s as E,B as l,p as A,a as g,e as s,aa as i}from"./modules/vue-9M24w38T.js";import{I as _}from"./slidev/default-BipQYVCE.js";import{u as m,f as y}from"./slidev/context-qB6h4SFG.js";import{_ as f}from"./index-CnK1U9Ny.js";import"./modules/unplugin-icons-k6D-q1La.js";import"./modules/shiki-D165QSPi.js";const e=a=>(A("data-v-413f9f2c"),a=a(),g(),a),C=e(()=>s("h1",null,"プレイヤーシップの左右の動きのコード",-1)),B=e(()=>s("p",null,"プレイヤーシップの左右の動きのコードを入力する。",-1)),u=e(()=>s("p",null,"下のように入力する。",-1)),v=e(()=>s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"using System.Collections;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"using System.Collections.Generic;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"using UnityEngine;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"public class Player : MonoBehaviour")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"{")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    //自機の動く速さ")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    public float moveSpeed = 10f;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    private Rigidbody2D rb;")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    private Vector2 movement;")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    // ゲームを走らせたとき、最初だけ読まれるコードである。（Scratchでいう「緑の旗が押されたとき」のブロック）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    void Start()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"        rb = GetComponent"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"Rigidbody2D"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"();")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    }")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    // ゲームを走らせたとき、常に読まれるコードである。（Scratchでいう「ずっと」のブロック）")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    void Update()")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    {")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},'        float moveX = Input.GetAxis("Horizontal");')]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"        movement = new Vector2(moveX, 0f);")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"    }")])])],-1)),S={__name:"slides.md__slidev_13",setup(a){const{$slidev:b,$nav:x,$clicksContext:t,$clicks:$,$page:I,$renderContext:P,$frontmatter:h}=m();return t.setup(),(V,w)=>{const p=k;return o(),r(_,D(E(l(y)(l(h),12))),{default:n(()=>[C,B,u,c(p,d({},{ranges:[]}),{default:n(()=>[v]),_:1},16)]),_:1},16)}}},j=f(S,[["__scopeId","data-v-413f9f2c"]]);export{j as default};
