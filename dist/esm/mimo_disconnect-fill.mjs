export const name="mimo_disconnect-fill";
export const id="dl_14d0f1f4d2d8f5eadfa9";
export const url=new URL("../icons/mimo_disconnect-fill.svg?v=914d2ddcb62721869e8d32c94776cbbb3556e57c996eb82228a6069732271cab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
