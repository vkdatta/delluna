export const name="square-split-horizontal";
export const id="dl_7acd7e23aa264c4284cc";
export const url=new URL("../icons/square-split-horizontal.svg?v=774c92c7c28ed85b6ad65fcbce70fd53165536570cb7f6b38653d67f68ae8743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
