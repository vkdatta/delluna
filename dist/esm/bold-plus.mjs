export const name="bold-plus";
export const id="dl_a853e7a01c57cfeb51d9";
export const url=new URL("../icons/bold-plus.svg?v=c9851a683a6b505d54ae47ae01931d5d4aad750707cce77d8067f3225134ccdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
