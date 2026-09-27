export const name="network-slash-duotone";
export const id="dl_b19ac7fedfbc4163bc0d";
export const url=new URL("../icons/network-slash-duotone.svg?v=e1c410200d95cabcf0810fd3641e1b9a112ad113f653c1b0e30eaf515f2edc98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
