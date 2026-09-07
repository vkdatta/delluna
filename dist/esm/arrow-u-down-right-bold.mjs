export const name="arrow-u-down-right-bold";
export const id="dl_81d7031343f947d88090";
export const url=new URL("../icons/arrow-u-down-right-bold.svg?v=1c7aa2fa319f5e80807f5b4b5e0f9b47a0277b5484aa1d05a115b01263158f4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
