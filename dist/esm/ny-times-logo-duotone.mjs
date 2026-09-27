export const name="ny-times-logo-duotone";
export const id="dl_69176c759ff7439786c3";
export const url=new URL("../icons/ny-times-logo-duotone.svg?v=3326146d7acc2170c65f2454103d82138e4d8d47db0f16e4e25529c8f312bd85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
