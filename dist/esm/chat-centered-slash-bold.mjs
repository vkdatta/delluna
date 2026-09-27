export const name="chat-centered-slash-bold";
export const id="dl_0a182617461d48a0aa81";
export const url=new URL("../icons/chat-centered-slash-bold.svg?v=64e96cde0dd590fdbb6e71bff0cad07b6fbcbd6ad216e16859b6cf0fa01e1f27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
