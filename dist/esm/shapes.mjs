export const name="shapes";
export const id="dl_bdaa60b63419c396ef55";
export const url=new URL("../icons/shapes.svg?v=b461a86a20b4953dc2f79c49bd9050473cebd54eba3a2c853ef4885448218dcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
