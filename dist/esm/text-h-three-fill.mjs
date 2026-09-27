export const name="text-h-three-fill";
export const id="dl_d13199e3fe4c16e399d2";
export const url=new URL("../icons/text-h-three-fill.svg?v=5ca95e7bf08789d718f2dce7e452df955c0124e3bb931ffefda78f0e3ef36eba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
