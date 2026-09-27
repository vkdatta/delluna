export const name="frame_reload-fill";
export const id="dl_caa8e3f6a6a0f3a9ab05";
export const url=new URL("../icons/frame_reload-fill.svg?v=7185756e696fd4cdf179685d32f24a8f951ae25e2cae2b64734af49af9a0bc01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
