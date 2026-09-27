export const name="number-seven-thin";
export const id="dl_dc8db2ed8eef4a60aab0";
export const url=new URL("../icons/number-seven-thin.svg?v=c6df400855b5ec11706317232a557635910df357ec3fa5fed394c753f3f0a978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
