export const name="lucid_1-circle-power";
export const id="dl_f96c54d0105047ce84e7";
export const url=new URL("../icons/lucid_1-circle-power.svg?v=4cfc1cc51da053d6ab0bd16713a2d317a2ef34fa6dc71322d27d94ace2c5cfb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
