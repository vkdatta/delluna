export const name="battery-vertical-empty-bold";
export const id="dl_ea78f4180c7b4ed781d1";
export const url=new URL("../icons/battery-vertical-empty-bold.svg?v=4369d695a7d467f998b6979f509f3889b1daeb10f060124853dd86912d34d12b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
