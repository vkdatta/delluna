export const name="text-h-one-light";
export const id="dl_865a4b4ac39adda3e7f4";
export const url=new URL("../icons/text-h-one-light.svg?v=1d574f56ccc64386ce3aeb069f3d6053759427331066ee2b714229c26a5e40d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
