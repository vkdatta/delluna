export const name="local_atm-fill";
export const id="dl_b77d909f645f39061a93";
export const url=new URL("../icons/local_atm-fill.svg?v=81578c58c687c078c7fbc5159222cc43e91c17a217b50cb3fe9964e2cef6639f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
