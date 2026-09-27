export const name="selection-inverse";
export const id="dl_326ae224299f088f3115";
export const url=new URL("../icons/selection-inverse.svg?v=7db35e90e0ba3223623eca766b99ddd61a31f8a31d91b03e83f2de96af3b945f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
