"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),c=o,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7294),o=n(6010),r=n(5281),l=n(5999);const i={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};var p=n(5108);const s={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function d(e){const{children:t,type:n,title:l,icon:d}=u(e),c=function(e){const t=m[e]??e,n=s[t];return n||(p.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),s.info)}(n),h=l??c.label,{iconComponent:k}=c,g=d??a.createElement(k,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,i.admonition)},a.createElement("div",{className:i.admonitionHeading},a.createElement("span",{className:i.admonitionIcon},g),h),a.createElement("div",{className:i.admonitionContent},t))}},7417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),o=(n(7294),n(3905)),r=n(3612);const l={},i="LLMs",p={unversionedId:"components/llms",id:"components/llms",title:"LLMs",description:"We appreciate your understanding as we polish our documentation \u2013 it may contain some rough edges. Share your feedback or report issues to help us improve! \ud83d\udee0\ufe0f\ud83d\udcdd",source:"@site/docs/components/llms.mdx",sourceDirName:"components",slug:"/components/llms",permalink:"/components/llms",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Embeddings",permalink:"/components/embeddings"},next:{title:"Loaders",permalink:"/components/loaders"}},s={},m=[{value:"Anthropic",id:"anthropic",level:3},{value:"ChatAnthropic",id:"chatanthropic",level:3},{value:"CTransformers",id:"ctransformers",level:3},{value:"ChatOpenAI",id:"chatopenai",level:3},{value:"Cohere",id:"cohere",level:3},{value:"HuggingFaceHub",id:"huggingfacehub",level:3},{value:"LlamaCpp",id:"llamacpp",level:3},{value:"OpenAI",id:"openai",level:3},{value:"VertexAI",id:"vertexai",level:3}],u={toc:m},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"llms"},"LLMs"),(0,o.kt)(r.Z,{type:"caution",icon:"\ud83d\udea7",title:"ZONE UNDER CONSTRUCTION",mdxType:"Admonition"},(0,o.kt)("p",null,"We appreciate your understanding as we polish our documentation \u2013 it may contain some rough edges. Share your feedback or report issues to help us improve! \ud83d\udee0\ufe0f\ud83d\udcdd")),(0,o.kt)("p",null,"An LLM stands for Large Language Model. It is a core component of Langflow and provides a standard interface for interacting with different LLMs from various providers such as OpenAI, Cohere, and HuggingFace. LLMs are used widely throughout Langflow, including in chains and agents. They can be used to generate text based on a given prompt (or input)."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"anthropic"},"Anthropic"),(0,o.kt)("p",null,"Wrapper around Anthropic's large language models. Find out more at ",(0,o.kt)("a",{parentName:"p",href:"https://www.anthropic.com"},"Anthropic"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"anthropic_api_key:")," Used to authenticate and authorize access to the Anthropic API.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"anthropic_api_url:")," Specifies the URL of the Anthropic API to connect to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"temperature:")," Tunes the degree of randomness in text generations. Should be a non-negative value."))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"chatanthropic"},"ChatAnthropic"),(0,o.kt)("p",null,"Wrapper around Anthropic's large language model used for chat-based interactions. Find out more at ",(0,o.kt)("a",{parentName:"p",href:"https://www.anthropic.com"},"Anthropic"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"anthropic_api_key:")," Used to authenticate and authorize access to the Anthropic API.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"anthropic_api_url:")," Specifies the URL of the Anthropic API to connect to.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"temperature:")," Tunes the degree of randomness in text generations. Should be a non-negative value."))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"ctransformers"},"CTransformers"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CTransformers")," component provides access to the Transformer models implemented in C/C++ using the\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ggerganov/ggml"},"GGML"),"\xa0library."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"ctransformers")," python package installed. Learn more about installation, supported models, and usage ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marella/ctransformers"},"here"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"config:")," Configuration for the Transformer models. Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marella/ctransformers#config"},"config"),". Defaults to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n\n"top_k": 40,\n\n"top_p": 0.95,\n\n"temperature": 0.8,\n\n"repetition_penalty": 1.1,\n\n"last_n_tokens": 64,\n\n"seed": -1,\n\n"max_new_tokens": 256,\n\n"stop": null,\n\n"stream": false,\n\n"reset": true,\n\n"batch_size": 8,\n\n"threads": -1,\n\n"context_length": -1,\n\n"gpu_layers": 0\n\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"model:")," The path to a model file or directory or the name of a Hugging Face Hub model repo."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"model_file:")," The name of the model file in the repo or directory."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"model_type:")," Transformer model to be used. Learn more ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/marella/ctransformers"},"here"),"."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"chatopenai"},"ChatOpenAI"),(0,o.kt)("p",null,"Wrapper around ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com"},"OpenAI's")," chat large language models. This component supports some of the LLMs (Large Language Models) available by OpenAI and is used for tasks such as chatbots, Generative Question-Answering (GQA), and summarization."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"max_tokens:")," The maximum number of tokens to generate in the completion. ",(0,o.kt)("inlineCode",{parentName:"li"},"-1")," returns as many tokens as possible, given the prompt and the model's maximal context size \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"256"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"model_kwargs:")," Holds any model parameters valid for creating non-specified calls."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"model_name:")," Defines the OpenAI chat model to be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"openai_api_base:")," Used to specify the base URL for the OpenAI API. It is typically set to the API endpoint provided by the OpenAI service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"openai_api_key:"),"  Key used to authenticate and access the OpenAI API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"temperature:")," Tunes the degree of randomness in text generations. Should be a non-negative value \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.7"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"cohere"},"Cohere"),(0,o.kt)("p",null,"Wrapper around ",(0,o.kt)("a",{parentName:"p",href:"https://cohere.com"},"Cohere's")," large language models."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"cohere_api_key:")," Holds the API key required to authenticate with the Cohere service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"max_tokens:")," Maximum number of tokens to predict per generation \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"256"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"temperature:")," Tunes the degree of randomness in text generations. Should be a non-negative value \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.75"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"huggingfacehub"},"HuggingFaceHub"),(0,o.kt)("p",null,"Wrapper around ",(0,o.kt)("a",{parentName:"p",href:"https://www.huggingface.co/models"},"HuggingFace")," models."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The HuggingFace Hub is an online platform that hosts over 120k models, 20k datasets, and 50k demo apps, all of which are open-source and publicly available. Discover more at ",(0,o.kt)("a",{parentName:"p",href:"http://www.huggingface.co"},"HuggingFace"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"huggingfacehub_api_token:")," Token needed to authenticate the API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"model_kwargs:")," Keyword arguments to pass to the model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"repo_id:")," Model name to use \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"gpt2"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"task:")," Task to call the model with. Should be a task that returns ",(0,o.kt)("inlineCode",{parentName:"li"},"generated_text")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"summary_text"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"llamacpp"},"LlamaCpp"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LlamaCpp")," component provides access to the ",(0,o.kt)("inlineCode",{parentName:"p"},"llama.cpp")," models."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to have the ",(0,o.kt)("inlineCode",{parentName:"p"},"llama.cpp")," python package installed. Learn more about installation, supported models, and usage ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ggerganov/llama.cpp"},"here"),".")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"echo:")," Whether to echo the prompt \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"f16_kv:")," Use half-precision for key/value cache \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"last_n_tokens_size:")," The number of tokens to look back at when applying the repeat_penalty. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"64"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"logits_all:")," Return logits for all tokens, not just the last token Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"logprobs:")," The number of logprobs to return. If None, no logprobs are returned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lora_base:")," The path to the Llama LoRA base model."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lora_path:")," The path to the Llama LoRA. If None, no LoRa is loaded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"max_tokens:")," The maximum number of tokens to generate. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"256"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"model_path:")," The path to the Llama model file."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"n_batch:")," Number of tokens to process in parallel. Should be a number between 1 and n_ctx. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"8"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"n_ctx:")," Token context window. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"512"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"n_gpu_layers:")," Number of layers to be loaded into GPU memory. Default None."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"n_parts:"),"Number of parts to split the model into. If -1, the number of parts is automatically determined. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"-1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"n_threads:")," Number of threads to use. If None, the number of threads is automatically determined."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"repeat_penalty:")," The penalty to apply to repeated tokens. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"1.1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"seed:")," Seed. If -1, a random seed is used. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"-1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"stop:")," A list of strings to stop generation when encountered."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"streaming:")," Whether to stream the results, token by token. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"suffix:")," A suffix to append to the generated text. If None, no suffix is appended."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tags:")," Tags to add to the run trace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"temperature:")," The temperature to use for sampling. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.8"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"top_k:")," The top-k value to use for sampling. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"40"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"top_p:")," The top-p value to use for sampling. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.95"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"use_mlock:")," Force the system to keep the model in RAM. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"use_mmap:")," Whether to keep the model loaded in RAM. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"verbose:")," This parameter is used to control the level of detail in the output of the chain. When set to True, it will print out some internal states of the chain while it is being run, which can help debug and understand the chain's behavior. If set to False, it will suppress the verbose output. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vocab_only:")," Only load the vocabulary, no weights. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"openai"},"OpenAI"),(0,o.kt)("p",null,"Wrapper around ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com"},"OpenAI's")," large language models."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"max_tokens:")," The maximum number of tokens to generate in the completion. ",(0,o.kt)("inlineCode",{parentName:"li"},"-1")," returns as many tokens as possible, given the prompt and the model's maximal context size \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"256"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"model_kwargs:")," Holds any model parameters valid for creating non-specified calls."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"model_name:")," Defines the OpenAI model to be used."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"openai_api_base:")," Used to specify the base URL for the OpenAI API. It is typically set to the API endpoint provided by the OpenAI service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"openai_api_key:"),"  Key used to authenticate and access the OpenAI API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"temperature:")," Tunes the degree of randomness in text generations. Should be a non-negative value \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.7"),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"vertexai"},"VertexAI"),(0,o.kt)("p",null,"Wrapper around ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/vertex-ai"},"Google Vertex AI")," large language models."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Vertex AI is a cloud computing platform offered by Google Cloud Platform (GCP). It provides access, management, and development of applications and services through global data centers. To use Vertex AI PaLM, you need to have the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/google-cloud-aiplatform/"},"google-cloud-aiplatform")," Python package installed and credentials configured for your environment.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"credentials:")," The default custom credentials (google.auth.credentials.Credentials) to use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"location:")," The default location to use when making API calls \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"us-central1"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"max_output_tokens:")," Token limit determines the maximum amount of text output from one prompt \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"128"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"model_name:")," The name of the Vertex AI large language model \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"text-bison"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"project:")," The default GCP project to use when making Vertex API calls."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"request_parallelism:")," The amount of parallelism allowed for requests issued to VertexAI models \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"5"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"temperature:")," Tunes the degree of randomness in text generations. Should be a non-negative value \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"top_k:")," How the model selects tokens for output, the next token is selected from \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"40"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"top_p:")," Tokens are selected from most probable to least until the sum of their \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"0.95"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"tuned_model_name:")," The name of a tuned model. If provided, model_name is ignored."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"verbose:")," This parameter is used to control the level of detail in the output of the chain. When set to True, it will print out some internal states of the chain while it is being run, which can help debug and understand the chain's behavior. If set to False, it will suppress the verbose output \u2013 defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"False"),".")))}c.isMDXComponent=!0}}]);