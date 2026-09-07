export const name="battery-low-light";
export const id="dl_a6bde4646f1a4de298dc";
export const url=new URL("../icons/battery-low-light.svg?v=5c8a306c9a68f60e21676225d586c4f1639fcf955935e8b5216f8b78d625f3d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
