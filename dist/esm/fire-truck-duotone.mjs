export const name="fire-truck-duotone";
export const id="dl_cb490ee8933641c5850f";
export const url=new URL("../icons/fire-truck-duotone.svg?v=bfe16e5cda0c4832fe040d74c0619c4765dc075f323389a5d52cb9182c810cfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
