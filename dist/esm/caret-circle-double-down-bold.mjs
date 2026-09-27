export const name="caret-circle-double-down-bold";
export const id="dl_19c7200a9b444ae19b63";
export const url=new URL("../icons/caret-circle-double-down-bold.svg?v=f8d2480bb4767f8c2be6c5c0f938c2432fe201c8297b23c2e6e3d5ccb9836294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
