export const name="seal-check-thin";
export const id="dl_8192ca0ab61d453ca4af";
export const url=new URL("../icons/S/seal-check-thin.svg?v=7a4a8b02d2c17a4b0cd9099944ea755947d6911785df64b9738fdcfa1d1aa2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
