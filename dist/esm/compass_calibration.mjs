export const name="compass_calibration";
export const id="dl_fd6c3dfa22c94cf4aca4";
export const url=new URL("../icons/compass_calibration.svg?v=373c9098b4fda5e7bfc3dc02a1f8c2ee8daa17f48e8765eecd67146f2687c895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
