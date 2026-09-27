export const name="lucid_3-settings-2";
export const id="dl_261e8ca4d8694f8b9520";
export const url=new URL("../icons/lucid_3-settings-2.svg?v=3d6c3e0757b05fff84f3fbacc8cf11b425574bc0e80f7df80a8bb25b98290f01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
