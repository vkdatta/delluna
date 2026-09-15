export const name="dock_to_bottom";
export const id="dl_d09f27fc4d1b4b04b542";
export const url=new URL("../icons/D/dock_to_bottom.svg?v=ba1835faf803dd00f417fe8e5acd86b2f2ac517f2d66f7027fad1d123424bff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
