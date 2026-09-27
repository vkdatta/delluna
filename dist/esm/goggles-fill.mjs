export const name="goggles-fill";
export const id="dl_5dce8a3e1d4a4ae6b486";
export const url=new URL("../icons/goggles-fill.svg?v=b50de06552313b70aeac5ff0788ce41b5cc03488699e4537c39f1fab3b25b395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
