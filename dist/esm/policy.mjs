export const name="policy";
export const id="dl_cd4637630e491b339f29";
export const url=new URL("../icons/policy.svg?v=17fdf6b23f9f83e01f4b9b9e8f4bdf6346dc60a5c8c25f44e4c229473426c349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
