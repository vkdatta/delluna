export const name="float_landscape_2";
export const id="dl_a33e5f20eff3b50066b2";
export const url=new URL("../icons/float_landscape_2.svg?v=e3bb4d64d51b328a24eb05371248c3c30a554c00447320008a95553066aac90a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
