export const name="sun-horizon";
export const id="dl_c1c26563e0cc444a89a6";
export const url=new URL("../icons/S/sun-horizon.svg?v=9d63240fd584ffdc66fc0a2f01dae36ef1e7b0e074d1771375f46179692adbcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
