export const name="expand_circle_up-fill";
export const id="dl_fc8f1aa5b13f398e0c02";
export const url=new URL("../icons/expand_circle_up-fill.svg?v=0026b42a8a5ad436c3cffedc165d7e73198eaa5563206497e61d7cdf4c90945d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
