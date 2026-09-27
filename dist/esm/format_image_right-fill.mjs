export const name="format_image_right-fill";
export const id="dl_72de8304e179b21ac6cc";
export const url=new URL("../icons/format_image_right-fill.svg?v=fe687792a8d0cd833d702c88df68ce50a0e856e6acc9ffaf0f61a389168c3470",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
