export const name="lucid_2-crosshair";
export const id="dl_70ff1b80e0004e43af31";
export const url=new URL("../icons/lucid_2-crosshair.svg?v=36892d869a0a8444edc3d1b36ebfef61114265085e76cc7a42c64a08b362137c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
