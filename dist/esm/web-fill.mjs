export const name="web-fill";
export const id="dl_6cb2c5e01c9e4b788501";
export const url=new URL("../icons/web-fill.svg?v=22dc718aae735669955a0078ef3d1f3e97cdec433cca9faa39f7decd86feaa5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
