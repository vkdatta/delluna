export const name="devices-light";
export const id="dl_1e22da2d9307465c83a1";
export const url=new URL("../icons/devices-light.svg?v=0de4bcbde84d3fd88a65fa4d3225d08c18b51164d19c75a1c99ca9971555e2d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
