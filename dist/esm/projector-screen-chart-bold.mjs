export const name="projector-screen-chart-bold";
export const id="dl_c248b61450b7461db766";
export const url=new URL("../icons/projector-screen-chart-bold.svg?v=ea350042b376762261a74403bc64643f47b676d7f961bdf4e5a183050f5f6474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
