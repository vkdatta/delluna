export const name="nest_farsight_heat-fill";
export const id="dl_907d92b72f26472093e2";
export const url=new URL("../icons/nest_farsight_heat-fill.svg?v=f48a8f9331ba26f3e08fdd97b62a08e592d75bb8fe33f5c468771671088c15e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
