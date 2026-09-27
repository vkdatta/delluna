export const name="cable_car-fill";
export const id="dl_5f96b173dbbb5fddfa2e";
export const url=new URL("../icons/cable_car-fill.svg?v=26c0f921a6cef76945a1f9d814cdc5f82da92ac445834b0058ffba2ef7dcfd7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
