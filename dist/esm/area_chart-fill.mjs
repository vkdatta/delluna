export const name="area_chart-fill";
export const id="dl_3d72383175ae1a7d5967";
export const url=new URL("../icons/area_chart-fill.svg?v=61866e31480833c489c33396a17d7b8f894f4ffa48aae625e77ee9b2652c2bf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
