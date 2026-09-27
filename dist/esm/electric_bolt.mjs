export const name="electric_bolt";
export const id="dl_55a93dae4354a735a09e";
export const url=new URL("../icons/electric_bolt.svg?v=0e3eebeaa7788de25150b0a74d65c5b595d4250c035a1cbf95afa30e2c84b2f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
