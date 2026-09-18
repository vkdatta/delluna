export const name="pace-fill";
export const id="dl_d78a64365bbc486999b2";
export const url=new URL("../icons/P/pace-fill.svg?v=e36a4f08fa44495a3683356e989022674db25f77dbe30d556bd9e6d1cd70a9c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
