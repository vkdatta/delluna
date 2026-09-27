export const name="frame_source-fill";
export const id="dl_ff21cb6b6ca4fa438fdf";
export const url=new URL("../icons/frame_source-fill.svg?v=fb3fcde7987477a76e24c740b11d84b4cb1786e611a2f1ac0651f142adb7cf38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
