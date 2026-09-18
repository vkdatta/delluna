export const name="safety_check_off";
export const id="dl_b9b3bb2a10b24e8fb10d";
export const url=new URL("../icons/S/safety_check_off.svg?v=bb4c69537fb1d2d6c39d9d4fcbc70750e01cbc088ed9e5e74250dbbb83a919d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
