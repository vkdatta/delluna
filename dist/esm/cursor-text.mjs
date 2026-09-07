export const name="cursor-text";
export const id="dl_0a0ff3aee1c247349040";
export const url=new URL("../icons/cursor-text.svg?v=0fcad440eff0a470830a18638218ee08c339cc690256e980a3ce9c04c58556d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
