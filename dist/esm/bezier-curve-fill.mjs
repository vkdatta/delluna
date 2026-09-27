export const name="bezier-curve-fill";
export const id="dl_574f07cb47534577a2be";
export const url=new URL("../icons/bezier-curve-fill.svg?v=0c9a3784d9512fa443ee43b41bff837d7eba48b3eab11d253e0aa2c79e96db04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
