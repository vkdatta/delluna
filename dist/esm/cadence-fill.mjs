export const name="cadence-fill";
export const id="dl_e2bfc091e9ad7d6f4425";
export const url=new URL("../icons/cadence-fill.svg?v=d52dd0450bc61e79c6cd29cb6c6105aebc68fd7d8c862796e6a2f135db6ba3da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
