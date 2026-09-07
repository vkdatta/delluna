export const name="vector-two-duotone";
export const id="dl_d1f82b4fc21048d0a414";
export const url=new URL("../icons/V/vector-two-duotone.svg?v=90f4a5b21689471dffb433abab1a0fef27990d169ea56d73cd909c3acdc63fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
