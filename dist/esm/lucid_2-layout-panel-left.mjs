export const name="lucid_2-layout-panel-left";
export const id="dl_07ef1d07a87c4a199831";
export const url=new URL("../icons/lucid_2-layout-panel-left.svg?v=b18cc821e43795fc3b313c2f217157d50e2c7f1e41419dfa5b43eb0a542cebb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
