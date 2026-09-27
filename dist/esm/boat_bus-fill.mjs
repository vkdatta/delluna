export const name="boat_bus-fill";
export const id="dl_b623f1053cf643cbc658";
export const url=new URL("../icons/boat_bus-fill.svg?v=b6146254265e972843aaf13f6cf71f116c3b8390b3979610b82b9c278d2f9b8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
