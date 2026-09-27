export const name="location_chip";
export const id="dl_4493813eb226e888719b";
export const url=new URL("../icons/location_chip.svg?v=2e2d4646cedb2eef90a798792b0353943b48218dd01d865768da82838d5f0444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
