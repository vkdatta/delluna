export const name="camera-duotone";
export const id="dl_52b4408358ce4a83afea";
export const url=new URL("../icons/camera-duotone.svg?v=74ee874888a6605a0007cb9ffe4ac54e6cecd932388aad06813d106d84b5f2ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
