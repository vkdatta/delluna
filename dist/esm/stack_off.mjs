export const name="stack_off";
export const id="dl_4239367eaeaf3a14d36e";
export const url=new URL("../icons/stack_off.svg?v=59d47693962c69af740d8c6af3b80f64fd07ece5f8e2ede5e9288b85c12bbe5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
