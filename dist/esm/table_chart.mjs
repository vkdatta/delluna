export const name="table_chart";
export const id="dl_e0379f95f9130f90f042";
export const url=new URL("../icons/table_chart.svg?v=deb29d214e4d1550f272aa0b1bce968c50415e66146272bbf7f54760a8b489fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
