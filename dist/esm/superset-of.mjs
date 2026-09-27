export const name="superset-of";
export const id="dl_cb07bed3b7551006ec99";
export const url=new URL("../icons/superset-of.svg?v=d5b2c9bd5761c547b5e1ecc4a1bfb654c74710975360ce95e97e8f1a8676330b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
