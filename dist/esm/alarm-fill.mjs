export const name="alarm-fill";
export const id="dl_cbf73d6f82814a52af18";
export const url=new URL("../icons/alarm-fill.svg?v=0e0c72041bea656827b8ea631bd7fb6787c302ba365d237a51e83bebe319bc3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
