export const name="forklift-fill";
export const id="dl_49e9212cbb3841beb2fd";
export const url=new URL("../icons/F/forklift-fill.svg?v=156a3021c6a76a939b78d3e4428fb2edae8747772bfb3d28a0a816f9b05669f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
