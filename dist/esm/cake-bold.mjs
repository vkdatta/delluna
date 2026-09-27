export const name="cake-bold";
export const id="dl_ee02977204cf4ecbba6f";
export const url=new URL("../icons/cake-bold.svg?v=a93bbcfacee2f10f77e0a3ecb19cf5b140be176444daf39bda46d9f70a3e1889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
