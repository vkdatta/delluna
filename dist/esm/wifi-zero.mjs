export const name="wifi-zero";
export const id="dl_75a318ca98e144b8b154";
export const url=new URL("../icons/wifi-zero.svg?v=6853dde65fe1d800637a0de56beafae74245bc81f26bf9d3636081bbd416e47f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
