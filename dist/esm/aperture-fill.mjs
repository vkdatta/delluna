export const name="aperture-fill";
export const id="dl_7babdcf584cb4f5da7c3";
export const url=new URL("../icons/aperture-fill.svg?v=a90fb2d3e73895a57200aef9d8ccbe51b683d7ccae1d54112d7402ecefda121d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
