export const name="lucid_2-disc";
export const id="dl_ade8eada76aa44498331";
export const url=new URL("../icons/lucid_2-disc.svg?v=890d37b0498e66663dd137ae2efa69ab18caac22a8efaf7e930dc4c60219cd5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
