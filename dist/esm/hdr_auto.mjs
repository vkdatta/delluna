export const name="hdr_auto";
export const id="dl_9e861a1bc20143f0b690";
export const url=new URL("../icons/hdr_auto.svg?v=966d0111aed19ba0386caebdd7c264d47f1adfaf10673049af79217a29592b75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
