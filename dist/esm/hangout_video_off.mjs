export const name="hangout_video_off";
export const id="dl_0a00cf1ca9875671fb5a";
export const url=new URL("../icons/hangout_video_off.svg?v=fbf868c80fb2e907378e241e8c2e10174758ffe5e23777239cd481f8d630359d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
