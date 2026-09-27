export const name="sports_football";
export const id="dl_03dc5ea90c601b2ccec9";
export const url=new URL("../icons/sports_football.svg?v=d511d95edcfacf079b85dfb79aff7615e91e7ad0417cfedb065f7d746357c6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
