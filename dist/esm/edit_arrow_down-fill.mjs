export const name="edit_arrow_down-fill";
export const id="dl_2c8fcb061e11a042d122";
export const url=new URL("../icons/edit_arrow_down-fill.svg?v=94d939523491251a89dcf6c7e4a611f8fd41bc51c3307edbaa1c496b422e1090",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
