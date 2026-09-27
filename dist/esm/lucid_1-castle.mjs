export const name="lucid_1-castle";
export const id="dl_51a05cc74cd849f3ae04";
export const url=new URL("../icons/lucid_1-castle.svg?v=865a6e51e3613ef0174cf0a6100f9c87bc92a910be542fe9e000c7c98d3819dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
