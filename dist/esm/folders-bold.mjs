export const name="folders-bold";
export const id="dl_18e10df8a0554d849ce1";
export const url=new URL("../icons/folders-bold.svg?v=b0aac574845bfb6502c9cbd1f837202ad34777b3c4297f9c4c3156dc220eed09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
