export const name="head_mounted_device-fill";
export const id="dl_8d793c2691fed3d7740d";
export const url=new URL("../icons/head_mounted_device-fill.svg?v=a584162e477b4e558142dcc79ddf1894cc53d03b28bd3fbd4aaf2d312b16b0b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
