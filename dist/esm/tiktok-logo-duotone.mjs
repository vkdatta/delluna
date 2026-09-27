export const name="tiktok-logo-duotone";
export const id="dl_c1b765de3d601cab1bd0";
export const url=new URL("../icons/tiktok-logo-duotone.svg?v=e8acfddf2d6bf179bc750c32f1961ee79209ded5676b5489d0eb89142d1b6364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
