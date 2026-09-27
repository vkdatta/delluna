export const name="flashlight_on";
export const id="dl_ca92331a4f9ae5b7af59";
export const url=new URL("../icons/flashlight_on.svg?v=dd1c3fa0dad751bf9c3801c17c926a79e414543c499ed01305d426005e27e759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
