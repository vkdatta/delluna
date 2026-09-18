export const name="domino_mask-fill";
export const id="dl_fea0e9c8342e45548aef";
export const url=new URL("../icons/domino_mask-fill.svg?v=ae7f50454a5c4255f4111d751446162f00af9a6edb840f1a5e4a34bdda3938cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
