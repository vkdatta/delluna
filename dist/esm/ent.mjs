export const name="ent";
export const id="dl_a464f638ffd65f79f96f";
export const url=new URL("../icons/ent.svg?v=5ef17292d9b34f301e52959838cae755760240f2eea3d02b87524377b19ffb49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
