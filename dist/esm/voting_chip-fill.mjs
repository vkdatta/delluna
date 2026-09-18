export const name="voting_chip-fill";
export const id="dl_6acb68d822e24c669c5f";
export const url=new URL("../icons/voting_chip-fill.svg?v=7f91351ae7fbff605e54b0f0cb267a58084522f32d5ab1eb9475486e9318c9c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
