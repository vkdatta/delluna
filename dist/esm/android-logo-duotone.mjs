export const name="android-logo-duotone";
export const id="dl_429b5a8079ac4331afc0";
export const url=new URL("../icons/android-logo-duotone.svg?v=317e318038aa6a662c33cb2098a727ebae2c2dce54a3e8ed45e7e49af3f0c24c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
