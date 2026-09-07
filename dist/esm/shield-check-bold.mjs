export const name="shield-check-bold";
export const id="dl_84150d68ca7a4c72b054";
export const url=new URL("../icons/S/shield-check-bold.svg?v=da3d313e3cec48b0cf45865d791f4838b5841df2ef564467d02b15ff20f507f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
