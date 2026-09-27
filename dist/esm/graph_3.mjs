export const name="graph_3";
export const id="dl_94828258f0a102b7f236";
export const url=new URL("../icons/graph_3.svg?v=aaccaba853cb7e4d573f0617faaa367891ed836db58f740b4d372e17a84e6b86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
