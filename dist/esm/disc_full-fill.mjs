export const name="disc_full-fill";
export const id="dl_2f7be90a5362bea4261d";
export const url=new URL("../icons/disc_full-fill.svg?v=e5d5509a65e3a7d71e0d84c417e1e0fd28cddcd45f8b100195f9eb5bf03cf86b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
