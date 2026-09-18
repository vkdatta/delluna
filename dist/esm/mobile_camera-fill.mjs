export const name="mobile_camera-fill";
export const id="dl_0fbd9b3f22db4f109daa";
export const url=new URL("../icons/mobile_camera-fill.svg?v=1bce377ae848516aadacd295905b1face48970150fbfe61cef13eee1878a5f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
