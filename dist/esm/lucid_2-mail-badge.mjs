export const name="lucid_2-mail-badge";
export const id="dl_b2a8fff2a78f488ab733";
export const url=new URL("../icons/lucid_2-mail-badge.svg?v=f542b0b05a125e59ca9947fadeaa163446c2141df1dc0426fe53bac2e64f6a9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
