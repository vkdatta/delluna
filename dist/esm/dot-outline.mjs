export const name="dot-outline";
export const id="dl_a2f22a9e6f6c45ffbaee";
export const url=new URL("../icons/dot-outline.svg?v=b761c43f12d2b516a78635989497a596bcb1b1ef042b44ab12239e5addc32a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
