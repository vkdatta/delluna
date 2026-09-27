export const name="battery-full-fill";
export const id="dl_cfe0ac948cc34e0d90ee";
export const url=new URL("../icons/battery-full-fill.svg?v=1df2e840a3261647a04fcb2774b86c6e69bcbe02cb3e1322b64b5953e93c0dac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
