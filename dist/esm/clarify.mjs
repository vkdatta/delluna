export const name="clarify";
export const id="dl_44078e0b217d6f66747f";
export const url=new URL("../icons/clarify.svg?v=f5104fa54d50127415fe2901e6b33a2da34f4833e54d5ed7cd1cd6c538c9177a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
