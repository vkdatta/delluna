export const name="router_off-fill";
export const id="dl_c5c18ad638282768d271";
export const url=new URL("../icons/router_off-fill.svg?v=ea360357f70c1f4152bcdd7dd4f2c0bbfcb373a892e69472ed2bde351c5b7bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
