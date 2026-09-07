export const name="faders-horizontal-duotone";
export const id="dl_55c5e00e1ed9458f8868";
export const url=new URL("../icons/faders-horizontal-duotone.svg?v=41efebde57ae313e2b3bd92be69f77437b27900395bfe87fc4b3e50836833ea1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
