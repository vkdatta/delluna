export const name="cloud-snow-light";
export const id="dl_699e1f422339447ca538";
export const url=new URL("../icons/cloud-snow-light.svg?v=6ff137c031c2be921dbe6a1b01418d1f51def7f58ace1669fc32550df90f8877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
