export const name="directions_alt-fill";
export const id="dl_a3ab849d412c43f649bb";
export const url=new URL("../icons/directions_alt-fill.svg?v=d08d2f2080ec00d5fc977075b0cb341a151a27d7fdf474f7423020ef52b705ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
