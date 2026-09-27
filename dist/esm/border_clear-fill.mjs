export const name="border_clear-fill";
export const id="dl_b311146413882e3de1ef";
export const url=new URL("../icons/border_clear-fill.svg?v=f1843b8d494a73bf52a4b46c93dbd7ec4493a3aae00251d32c6f4a86a4497885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
