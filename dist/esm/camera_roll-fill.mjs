export const name="camera_roll-fill";
export const id="dl_f3b788ab9ca6c268fd6b";
export const url=new URL("../icons/camera_roll-fill.svg?v=32d8a9b079edefc5d26b2f0a16e8427064fbf8ccdd5978668a5960cd721537d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
