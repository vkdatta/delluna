export const name="contextual_token-fill";
export const id="dl_ecf75c6828974d348460";
export const url=new URL("../icons/C/contextual_token-fill.svg?v=6e1b6199e084c44203960947332356fcffbe02ddc18e47e189c0035cc0898bfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
