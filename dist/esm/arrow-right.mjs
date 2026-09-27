export const name="arrow-right";
export const id="dl_0b0457b1f332433f8a3c";
export const url=new URL("../icons/arrow-right.svg?v=fd1764628a600bf8aa40e21a5d64539085dbc9210385d7a0913ba7b6d304bffc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
