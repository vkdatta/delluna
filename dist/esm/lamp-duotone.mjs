export const name="lamp-duotone";
export const id="dl_7f8b32369348462ca101";
export const url=new URL("../icons/lamp-duotone.svg?v=a7302fb10cd890a725977e4ec48effdff446878a588c8b231d5474fd03584c58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
