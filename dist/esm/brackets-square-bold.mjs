export const name="brackets-square-bold";
export const id="dl_6633ab0c3e7c402bb6d3";
export const url=new URL("../icons/brackets-square-bold.svg?v=95d222ca58555396a3a4200c99cefb439858b737099c399d64d1f248ba363826",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
