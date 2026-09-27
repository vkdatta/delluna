export const name="power_off";
export const id="dl_1bbe0a6939e327d0c587";
export const url=new URL("../icons/power_off.svg?v=57435405b1ce4a0eaf4b74c1c0c8f48ff25cf7ec5fc6d98c71495ab64a8ffb29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
