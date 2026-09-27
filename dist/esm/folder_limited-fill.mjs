export const name="folder_limited-fill";
export const id="dl_a57debbba7a77a768aa0";
export const url=new URL("../icons/folder_limited-fill.svg?v=ec096a7385101ff578681524366876445b4e6317264705a8fef1c8d16cd1f864",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
