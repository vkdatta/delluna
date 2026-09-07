export const name="number-circle-two-bold";
export const id="dl_d43e13fc1d3b4c20aa45";
export const url=new URL("../icons/number-circle-two-bold.svg?v=dd912ccf44ed4b987ed1419eb23975b36eb40890966e3b0fddc731f40be724f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
