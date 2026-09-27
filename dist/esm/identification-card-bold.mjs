export const name="identification-card-bold";
export const id="dl_b67e299d2e0447dfbd40";
export const url=new URL("../icons/identification-card-bold.svg?v=8fe3a3e21555aa847627895c330ab5af594b109984c839f57e47f5fb4661139d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
