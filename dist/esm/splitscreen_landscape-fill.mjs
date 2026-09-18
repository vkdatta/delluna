export const name="splitscreen_landscape-fill";
export const id="dl_3207d3f617b040bc9b0c";
export const url=new URL("../icons/S/splitscreen_landscape-fill.svg?v=bfec0619215e1bd0adc9c070c089ec52aa19f611295373c845d7a756dcce6428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
