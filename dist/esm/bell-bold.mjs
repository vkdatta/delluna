export const name="bell-bold";
export const id="dl_7e3b896a7bef4fe7ac1a";
export const url=new URL("../icons/bell-bold.svg?v=5a1bd314658b859f47c3f51f609ab8b8663b77c11d7cbbd3963ca750d3b1238f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
