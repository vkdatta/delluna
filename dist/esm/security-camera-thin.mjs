export const name="security-camera-thin";
export const id="dl_956f7f760d6c8cce8fe7";
export const url=new URL("../icons/security-camera-thin.svg?v=2805a07fc89776fbaab4b0708c585b4c646a0dc40e676ddf61d722bc8cd6926b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
