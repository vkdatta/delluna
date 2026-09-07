export const name="beer-bottle-duotone";
export const id="dl_b8878617b55a4f94b70d";
export const url=new URL("../icons/beer-bottle-duotone.svg?v=90b5ba6439155eacdeb52a044bb5227a1b9320f42f425a34ae50546224a75678",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
