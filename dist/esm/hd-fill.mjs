export const name="hd-fill";
export const id="dl_e58f040ea7125f7f5dcb";
export const url=new URL("../icons/hd-fill.svg?v=2710c0b0431e07f90e73354c523de18c52ad361088d1c8b567f9f9bfe9eca370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
