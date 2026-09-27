export const name="flashlight_off-fill";
export const id="dl_61186ad6c91e14d530a3";
export const url=new URL("../icons/flashlight_off-fill.svg?v=e41e96a59c869348d309522051133635f96ab485f2124e9c7567f94717b83b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
