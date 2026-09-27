export const name="switch-camera";
export const id="dl_ecb9632c1ab141b5bce6";
export const url=new URL("../icons/switch-camera.svg?v=1b0db796690ae8c8068470cca372253bf918615c1a7fc12c990f8e877cd111b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
