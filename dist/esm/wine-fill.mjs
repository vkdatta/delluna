export const name="wine-fill";
export const id="dl_07d278a5499ba7f28262";
export const url=new URL("../icons/wine-fill.svg?v=ca8a9e1759aa44e8812c13370098f0c26448b7cf41e7cf6495a60c95a279fb24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
