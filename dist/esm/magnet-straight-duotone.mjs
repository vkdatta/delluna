export const name="magnet-straight-duotone";
export const id="dl_ef0d2b5ff78a45249b13";
export const url=new URL("../icons/magnet-straight-duotone.svg?v=03a3284cdba10404291eb77977aa484cf927e5f32d956c90b06569446b56cab4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
