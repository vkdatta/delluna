export const name="water_medium-fill";
export const id="dl_431949e3510a4a60b4f8";
export const url=new URL("../icons/water_medium-fill.svg?v=ca16edd2e8f41b3bcfc123c268e23ef404f45e3995d95a80f6c4cf0cf3e71c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
