export const name="line_axis-fill";
export const id="dl_b52118fe4b93d594e631";
export const url=new URL("../icons/line_axis-fill.svg?v=8a3435f0a2bde334d0121d49e6af5623e80150dbd8e25f9424b5539d00232550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
