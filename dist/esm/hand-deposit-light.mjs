export const name="hand-deposit-light";
export const id="dl_e816743e88f6462abe5b";
export const url=new URL("../icons/hand-deposit-light.svg?v=d128d29680dfb340b957cbc4a206272444e08da05002c6d45054deb7fb141677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
