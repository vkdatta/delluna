export const name="north-fill";
export const id="dl_6c9aa842d78154f65a96";
export const url=new URL("../icons/north-fill.svg?v=b4dcdfa4f405cda67417dbf6f5592d210e5d7c7b6d663d1a6eabf772b62eac83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
