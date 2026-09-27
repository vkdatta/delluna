export const name="vr180_create2d_off";
export const id="dl_2eb7e0169ff89e4f275f";
export const url=new URL("../icons/vr180_create2d_off.svg?v=44a563f2682ecf413e27dc337f1d45cc612e7a03c1f3f27115d320c8b3140754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
