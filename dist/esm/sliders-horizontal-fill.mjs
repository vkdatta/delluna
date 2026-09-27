export const name="sliders-horizontal-fill";
export const id="dl_8fcdbf49c64455dfbbf5";
export const url=new URL("../icons/sliders-horizontal-fill.svg?v=bdff0e763389d3e97baacc32c143beae4eb306035fa81e59512b67b5416c1f15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
