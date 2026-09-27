export const name="lucid_1-cloud-sun-rain";
export const id="dl_a694de2178bd4fc6a495";
export const url=new URL("../icons/lucid_1-cloud-sun-rain.svg?v=3d6437bb40a75bce508ae9ab8e9c0a86e09c0c39855a15e7b47ad7ecfdfdc27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
