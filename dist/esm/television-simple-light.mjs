export const name="television-simple-light";
export const id="dl_b31b56da70f20f453559";
export const url=new URL("../icons/television-simple-light.svg?v=efabeca04af9a30443a7be166b3d88d94ae064a266694b15ea5d6dacd4acd39c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
