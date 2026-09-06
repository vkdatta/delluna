export const name="lucid_3-shower-head";
export const id="dl_ed2249c7e5944ea3b464";
export const url=new URL("../icons/lucid_3-shower-head.svg?v=92154006f45fd19b9034300db7bb4bd6011a05ae19d77db2a4eaaa52df719324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
