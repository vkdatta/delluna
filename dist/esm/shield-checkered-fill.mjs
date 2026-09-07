export const name="shield-checkered-fill";
export const id="dl_2094b0b45bfe426795cb";
export const url=new URL("../icons/S/shield-checkered-fill.svg?v=eb397b6ac000d32e70070cdd743b486a4e3ffe3ef2eb51d19de4b1ed2e25192f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
