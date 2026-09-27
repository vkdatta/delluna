export const name="superset-proper-of-fill";
export const id="dl_4c31bc1e93eacd1b2f31";
export const url=new URL("../icons/superset-proper-of-fill.svg?v=584032d67d469aa79dac8f3b7a4ff02abe800df5a22ac035dbc744d7c31ee208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
