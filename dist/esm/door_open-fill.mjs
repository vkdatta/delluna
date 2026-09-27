export const name="door_open-fill";
export const id="dl_93a88a265981d55f9945";
export const url=new URL("../icons/door_open-fill.svg?v=22f6d25dce6d6dff3644030e319790253ecbf1878d79af9ac63c1cf4288d530e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
