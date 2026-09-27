export const name="building-thin";
export const id="dl_2b8eb98c4f074f0c9af3";
export const url=new URL("../icons/building-thin.svg?v=ca954ba6881a1a3439c6f502030bb43072f43c59afdccd9001335cb298233403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
