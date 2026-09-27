export const name="translate-light";
export const id="dl_d5fce16f7c679df913d1";
export const url=new URL("../icons/translate-light.svg?v=bb2762772a06ab613985f981ef6fe4df90101aac9b58b422b29874c8491d22ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
