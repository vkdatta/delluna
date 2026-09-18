export const name="file_save_off";
export const id="dl_ba1c49bdfd784156a35a";
export const url=new URL("../icons/file_save_off.svg?v=19593bc9825621a2c7f92ab3f5527f371b600bf6a55863aacdef5f4fc0d7f34a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
