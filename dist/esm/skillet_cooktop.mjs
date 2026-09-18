export const name="skillet_cooktop";
export const id="dl_25778cc7ec244af786b0";
export const url=new URL("../icons/S/skillet_cooktop.svg?v=bd6582b6d64b99bfdf75b4965ba2d314ff3e4f58eeb343d9083c17ff623d51a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
