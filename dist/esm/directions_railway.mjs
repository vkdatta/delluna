export const name="directions_railway";
export const id="dl_4bafa836eef9d75e7f30";
export const url=new URL("../icons/directions_railway.svg?v=48deab3487418e7ef4f875448e7ea489cc49d6a6040619a5d51fb33ddd12bf18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
