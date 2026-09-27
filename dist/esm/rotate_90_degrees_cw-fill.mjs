export const name="rotate_90_degrees_cw-fill";
export const id="dl_9fe61ff97d6fc1c7532b";
export const url=new URL("../icons/rotate_90_degrees_cw-fill.svg?v=0f29ddc14406c2c9f43c4ca0894edaf4315dea7754a1e99f5ec556d3ba3103f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
