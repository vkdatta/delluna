export const name="shuffle_on-fill";
export const id="dl_2e16cf06fdda922f744e";
export const url=new URL("../icons/shuffle_on-fill.svg?v=d8c20cdbb48c50bb365e575367c135a103f25d18adaea53b570eee584e82ea2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
