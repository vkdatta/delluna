export const name="arrow-line-left-bold";
export const id="dl_020ce0c19c394217bf41";
export const url=new URL("../icons/arrow-line-left-bold.svg?v=981b23d9c6012de04628031a1f188f4a8e32123b406fbdee5c0c1776e3244c15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
