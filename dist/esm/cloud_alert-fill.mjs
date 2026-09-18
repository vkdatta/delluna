export const name="cloud_alert-fill";
export const id="dl_1a25c068ae2e48648f7e";
export const url=new URL("../icons/cloud_alert-fill.svg?v=6f8b79065baf1c7416747afcbce6ac87cc3fd33a5afb14d43ce3fb9dd82e9a34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
