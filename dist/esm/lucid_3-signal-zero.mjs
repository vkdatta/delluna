export const name="lucid_3-signal-zero";
export const id="dl_e59fff0d87114d44ba89";
export const url=new URL("../icons/lucid_3-signal-zero.svg?v=80167010be0d8dc6739ffa319373d86a8cb7278147a47dc4e918bb5476c194da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
