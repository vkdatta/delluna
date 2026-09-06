export const name="number-square-seven-fill";
export const id="dl_6f2e34cdd37d4be4ae38";
export const url=new URL("../icons/number-square-seven-fill.svg?v=cb83b3278417827ca1fca486d0989210844d74c0efb0cc93110f109c503abf38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
