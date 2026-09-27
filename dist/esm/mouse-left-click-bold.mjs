export const name="mouse-left-click-bold";
export const id="dl_a504ab6ce66340958d9a";
export const url=new URL("../icons/mouse-left-click-bold.svg?v=185dfd4dde0efa518670571694735d0238b3ca3ce58bc2d10491b17e0a3884fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
