export const name="delivery_truck_speed-fill";
export const id="dl_334ef301d1e94f9cb9ed";
export const url=new URL("../icons/delivery_truck_speed-fill.svg?v=2eff4eae8049ddd774cec385aaaf74747c6eb6b0c12f1cfc60ec8a2311b1b8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
