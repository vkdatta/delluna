export const name="folder-star-bold";
export const id="dl_0c52d5fde5674d7a9a0e";
export const url=new URL("../icons/folder-star-bold.svg?v=b7f2411bf5da39603bb28db5724c70508805e7f88bb34c2afe89a8637a0e2214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
