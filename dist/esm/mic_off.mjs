export const name="mic_off";
export const id="dl_02cf94842b6c40e29884";
export const url=new URL("../icons/mic_off.svg?v=826c548fbab521d5d0f20f5a2ad1bd27241d77bdcb5f4d525453d8bf81d7c34c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
