export const name="save_as-fill";
export const id="dl_4628265c55f11c5c5a87";
export const url=new URL("../icons/save_as-fill.svg?v=10706e841608e2695bc4a02586f0ca5e94abf41f5ad50c96ac5afe1e6d041b6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
