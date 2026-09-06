export const name="lucid_2-hand";
export const id="dl_d8786d434bfb44738eea";
export const url=new URL("../icons/lucid_2-hand.svg?v=4b5e57734070d65deeb641e5412ef734950e87bc4898eeb38717e446b4ed131f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
