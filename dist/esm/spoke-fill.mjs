export const name="spoke-fill";
export const id="dl_cf1f2bc01ba25d1a3558";
export const url=new URL("../icons/spoke-fill.svg?v=162f99e0d7fe8b7bb8993eb3a0213b968c482e3426522ff27528f9a70eb7de0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
