export const name="fork-knife-light";
export const id="dl_8b2aeacbaed24afd816b";
export const url=new URL("../icons/fork-knife-light.svg?v=65d3160b6b90200914f2edc78a8287e99a4952e0dcbc9d82eda3cde17cf8faeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
