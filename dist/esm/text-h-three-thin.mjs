export const name="text-h-three-thin";
export const id="dl_fb3e09b772a54611bc2e";
export const url=new URL("../icons/T/text-h-three-thin.svg?v=ea816abfd1c932fca117eb1d0011ab35f2cd960af98dd9f617ee83c3508d50eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
