export const name="layers_clear-fill";
export const id="dl_b7854135f12858ee1534";
export const url=new URL("../icons/layers_clear-fill.svg?v=05ab02fbbea102d6013d5004098f9026bafc11c2443b85293dc6e39bca315862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
