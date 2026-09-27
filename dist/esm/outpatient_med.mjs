export const name="outpatient_med";
export const id="dl_d748caead16dcc3273bb";
export const url=new URL("../icons/outpatient_med.svg?v=813bfb32591fae1f4ec415ea0cedf419e14e9d998670c891ebd76f37e9c4ebf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
