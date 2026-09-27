export const name="lucid_1-arrow-up-wide-narrow";
export const id="dl_5860cefb1b1243c6b761";
export const url=new URL("../icons/lucid_1-arrow-up-wide-narrow.svg?v=fbf062bc78568103aed376b7cfea9f316c12dcc5a8afd2ac42a2057dd7099dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
