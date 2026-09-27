export const name="owl-fill";
export const id="dl_7bef18badaf9b01fa0d5";
export const url=new URL("../icons/owl-fill.svg?v=cbdb083f84576cd51bdc13543af8b7c48caf12a28418a5a3f9674696d33ed921",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
