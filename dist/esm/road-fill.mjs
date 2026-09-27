export const name="road-fill";
export const id="dl_b8c1c6d531997197d47d";
export const url=new URL("../icons/road-fill.svg?v=82f38fea17d70baa3ee0b830dfa3f5475c25cd19872945a294d86c7628cbbe87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
