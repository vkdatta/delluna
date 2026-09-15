export const name="cruelty_free-fill";
export const id="dl_2a4d5d762d154af48a90";
export const url=new URL("../icons/C/cruelty_free-fill.svg?v=5311d559fd79d1ec267b084a2828055b66264abab9d0b742f17b334489204aa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
