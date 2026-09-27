export const name="lucid_3-shower-head";
export const id="dl_ed2249c7e5944ea3b464";
export const url=new URL("../icons/lucid_3-shower-head.svg?v=7d855286cc24cc325882d0335d98bbdbc7d057e87d18c4037c2ac8a346cfe949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
