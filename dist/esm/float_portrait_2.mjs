export const name="float_portrait_2";
export const id="dl_ca1959a2a59c57fbeea6";
export const url=new URL("../icons/float_portrait_2.svg?v=8697d2791e73121e87ced5284da5a8e19c774da549c680d6a694266e75a2a500",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
