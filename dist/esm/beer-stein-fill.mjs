export const name="beer-stein-fill";
export const id="dl_8a7fa307ea6a48bea322";
export const url=new URL("../icons/beer-stein-fill.svg?v=043150a6ce3d8b425e55168b38eeb9d684366c5fa6985839ba9fd4f6cc38f3df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
