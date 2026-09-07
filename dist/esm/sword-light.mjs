export const name="sword-light";
export const id="dl_6691042d64a3418ea7e2";
export const url=new URL("../icons/S/sword-light.svg?v=383b1d439efbb745ca2b03be3cd04c6212796a9880db3f0bfe89a0c101c310f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
