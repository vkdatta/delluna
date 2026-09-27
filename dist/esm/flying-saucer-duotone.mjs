export const name="flying-saucer-duotone";
export const id="dl_f83af0289ebc48caa1b7";
export const url=new URL("../icons/flying-saucer-duotone.svg?v=f4c4766f3d5c00a16102e53cd12d11aa0570ac7e8a78d04a677ef7e7f5207172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
