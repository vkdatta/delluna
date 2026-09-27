export const name="edit-fill";
export const id="dl_fe00446c0e5571f99d65";
export const url=new URL("../icons/edit-fill.svg?v=1b10509888d3c2f4922056ac1a3edb9f5648a792d219d7f3bbe4be07f06bca70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
