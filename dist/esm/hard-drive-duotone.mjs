export const name="hard-drive-duotone";
export const id="dl_6c8a1c1013bd4949a0c3";
export const url=new URL("../icons/hard-drive-duotone.svg?v=e732515be99c3af426d12f565c090edac8574bc5c1893d152e636f85db7830c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
