export const name="lucid_1-arrow-down-z-a";
export const id="dl_e668103f3a0449059ff0";
export const url=new URL("../icons/lucid_1-arrow-down-z-a.svg?v=0d1acd33e8c2faf6df4590653e9bd7364b766832e3ea5c516f96760fba2cf9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
