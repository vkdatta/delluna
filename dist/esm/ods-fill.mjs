export const name="ods-fill";
export const id="dl_d8cc143fbb6fbd524300";
export const url=new URL("../icons/ods-fill.svg?v=72cb7cb5c2fb687a03812d9da55e9c7c7029ce1a35e0b422bd4af04e8050ce9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
