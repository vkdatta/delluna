export const name="cloud-rain-light";
export const id="dl_ab41b13f95314abe90cf";
export const url=new URL("../icons/cloud-rain-light.svg?v=b50ba417b504ddbdb8b2913961962513c5970e22ca74e21a3048c290ae822635",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
