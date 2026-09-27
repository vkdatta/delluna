export const name="truck-trailer-bold";
export const id="dl_87b2d3af180acf65eaef";
export const url=new URL("../icons/truck-trailer-bold.svg?v=2b0cad295807b0dda777b7a653434a850232016b7fa7ac21dabe2b1261530180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
