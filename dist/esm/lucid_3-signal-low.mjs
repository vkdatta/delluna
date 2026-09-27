export const name="lucid_3-signal-low";
export const id="dl_cd00ea04d5bc4f39b6a7";
export const url=new URL("../icons/lucid_3-signal-low.svg?v=e86aed9d66ef33a0ee9e1dabc9d85f5b6fc4dd5914f371ad4bd6cc80d0e319a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
