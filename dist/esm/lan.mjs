export const name="lan";
export const id="dl_c42d0fabc21bea93b977";
export const url=new URL("../icons/lan.svg?v=5fe0ef84bd6f51bdf52b60d027f454f6d6c7c05234ccf6c6fd6c0b58821cd7dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
