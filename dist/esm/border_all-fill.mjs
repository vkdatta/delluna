export const name="border_all-fill";
export const id="dl_e9d4b62449544524b7fe";
export const url=new URL("../icons/border_all-fill.svg?v=bc2c9509faa921187347b03eb3ac19e6c7cbd43253ab2f6708e8a416b3cd65a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
