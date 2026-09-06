export const name="rows-plus-top";
export const id="dl_e504bac3e26a486bb036";
export const url=new URL("../icons/rows-plus-top.svg?v=98a2fc90c53b83a6775a265f62957b31a6660689a602230ebcf8b1880d035929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
