export const name="car_defrost_right-fill";
export const id="dl_b4fb60f38fb5e5e71319";
export const url=new URL("../icons/car_defrost_right-fill.svg?v=6b463cb23da8fac31694a81cd5d74061fcc3458e45e00dd1ab8b60ccdb491f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
