export const name="circuitry-fill";
export const id="dl_91b247e687ea445ca92d";
export const url=new URL("../icons/circuitry-fill.svg?v=e1129d587cd8d9530d73c6e23f812f1736df73ab569cf7b73296724a56a568f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
