export const name="ink_selection-fill";
export const id="dl_d9b47f78de2ffcd8f306";
export const url=new URL("../icons/ink_selection-fill.svg?v=6d5aa23acc7105abe8f17f5727883e69217b25c62cfd297589142e49de6cdd27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
