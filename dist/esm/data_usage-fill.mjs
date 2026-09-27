export const name="data_usage-fill";
export const id="dl_92091e24ad2400bfe8f8";
export const url=new URL("../icons/data_usage-fill.svg?v=bb76e3c8cd5fb66a46fb2f119e5b1dded06d5f3ea088e604494bf707dbea791d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
