export const name="lucid_3-panel-right-open";
export const id="dl_31e0d961384a4195a136";
export const url=new URL("../icons/lucid_3-panel-right-open.svg?v=a7d6e171e845dd58187075b45bd7bb9aaebce11937faa9d8ec94027db1ba565a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
