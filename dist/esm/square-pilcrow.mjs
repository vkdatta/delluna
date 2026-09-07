export const name="square-pilcrow";
export const id="dl_a2024cdc654544b3ab79";
export const url=new URL("../icons/square-pilcrow.svg?v=31a025e12d143275c2185592ba3bd0d7e17b114558f8c4ef7bd357327e373ba9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
