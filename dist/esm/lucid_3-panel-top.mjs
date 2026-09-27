export const name="lucid_3-panel-top";
export const id="dl_2357a325cccd4961b27b";
export const url=new URL("../icons/lucid_3-panel-top.svg?v=f48b3dba389d933491d8b00368e7ebfb931271f47abdc2c326406e6d353626ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
