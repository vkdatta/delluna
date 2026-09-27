export const name="local_bar-fill";
export const id="dl_a1ee18a985942dfcd0fb";
export const url=new URL("../icons/local_bar-fill.svg?v=bf267d575bd92cc21f81d275c7100e104f4b98a31ddd3d173a7efa7e12db021e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
