export const name="rainbow-fill";
export const id="dl_f45ddd9e11344897b5d9";
export const url=new URL("../icons/rainbow-fill.svg?v=f4e93a367eb31d126b8600b39e688e0ed76319329d04f2a45492346113be5dde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
