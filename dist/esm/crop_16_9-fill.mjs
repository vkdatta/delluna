export const name="crop_16_9-fill";
export const id="dl_301e43b808bd487982a0";
export const url=new URL("../icons/crop_16_9-fill.svg?v=bb7d5e9e8eb8d5edaa6a0d160f267e8c3bde4f3472fdef0e7cb146d79224a606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
