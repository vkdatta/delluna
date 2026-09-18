export const name="air_purifier_gen-fill";
export const id="dl_711fe0631395496ea6df";
export const url=new URL("../icons/air_purifier_gen-fill.svg?v=0ae313e0fe558ee88ed962bd50f0ac5b57e25b530a5658a6331c2ef6cd9e1e1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
