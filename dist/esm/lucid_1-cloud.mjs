export const name="lucid_1-cloud";
export const id="dl_ff174bb3bd1545f28458";
export const url=new URL("../icons/lucid_1-cloud.svg?v=2c3073c71b0a8190c56cffbbd458e0ff70d0dd349b1f5c5868d69bcf2fe4e34f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
