export const name="cast_warning-fill";
export const id="dl_b59a2b7715076907deeb";
export const url=new URL("../icons/cast_warning-fill.svg?v=b9b6804419c9adb25cd6350371fc8f5b9288bbc30bc39850d98e51f2aff41279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
