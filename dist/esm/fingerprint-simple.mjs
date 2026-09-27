export const name="fingerprint-simple";
export const id="dl_3b3522aee20040c88ee9";
export const url=new URL("../icons/fingerprint-simple.svg?v=762cf334c149c5a2389ff6e148aa578333312653756672e0b53ab5e418cbf736",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
