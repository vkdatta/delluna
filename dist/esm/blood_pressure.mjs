export const name="blood_pressure";
export const id="dl_cf36efc244cdfaea238a";
export const url=new URL("../icons/blood_pressure.svg?v=7c8883254063a2b42371b785feaa5124b0ced13c23b7cb14c326a6120c62e633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
