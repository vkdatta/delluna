export const name="keyhole-bold";
export const id="dl_0b6eb9ddc45047adac4c";
export const url=new URL("../icons/keyhole-bold.svg?v=842c76c8f12f55d6985981c7a46a73903a65e3a7de4c25f9673aef07ed0c6af2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
