export const name="forward_circle-fill";
export const id="dl_0c039b0af873abd111fc";
export const url=new URL("../icons/forward_circle-fill.svg?v=4c39dd401aa408baf9cc1822b378d2e98c0d09a299e3c41ba1c6e80c2d30af98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
