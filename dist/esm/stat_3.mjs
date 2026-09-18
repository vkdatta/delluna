export const name="stat_3";
export const id="dl_1f91ab7d0e0d4f7197f0";
export const url=new URL("../icons/S/stat_3.svg?v=220f3dc8c281f2195fdaf73ef83b409fdd05593385fa04dea4df9908e4513a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
