export const name="facebook-logo-thin";
export const id="dl_f0ac26078e7c4594b636";
export const url=new URL("../icons/facebook-logo-thin.svg?v=c27fc12bc9e32e6a24d9d2af3ad7409abbddea0dadf4db4cb9e3d524c344b268",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
