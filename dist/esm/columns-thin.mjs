export const name="columns-thin";
export const id="dl_d4d44401ff214b5eaf37";
export const url=new URL("../icons/columns-thin.svg?v=4654b60ee1405ad73e645271cbb6e3552d07bba00614056d422c4e1b7269c0b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
