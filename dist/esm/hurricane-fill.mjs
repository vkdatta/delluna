export const name="hurricane-fill";
export const id="dl_643818e01c7843a69aa0";
export const url=new URL("../icons/hurricane-fill.svg?v=e60d2321dfa186fb5d08d9362c4cd1d06f4d9a107d0eccc404f3d38014befe4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
