export const name="yin-yang-light";
export const id="dl_0878e7fb4f6ca80f643e";
export const url=new URL("../icons/yin-yang-light.svg?v=9cc006aee8cfaaa3fae6da5621a0416555a4ae5695f2a5a64e19cd797c64e46e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
