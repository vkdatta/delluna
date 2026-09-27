export const name="cast_for_education";
export const id="dl_bcf8337011658677cdce";
export const url=new URL("../icons/cast_for_education.svg?v=5423b4a1b5775969de22e0c9d79221753560f5abc6e65344f39a6afb416046eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
