export const name="twitter-logo-fill";
export const id="dl_bf5b70d100cb223d9a67";
export const url=new URL("../icons/twitter-logo-fill.svg?v=d3c45f8427e1f64617ed51ddccdb0ddd53d36efb5a6cf2160e5246419f9ded4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
