export const name="lucid_2-link";
export const id="dl_fdc015ec6e364204bec0";
export const url=new URL("../icons/lucid_2-link.svg?v=9cf99c55cc30419d6a0a0096e73a530c05fdaff892b6badea82fc057a04ac938",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
