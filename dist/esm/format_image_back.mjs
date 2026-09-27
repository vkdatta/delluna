export const name="format_image_back";
export const id="dl_e1c3d80bfe5e7d31e5b4";
export const url=new URL("../icons/format_image_back.svg?v=5295d51dce0e1e62b9c5f682df021979793f3148ea7ded5b269e1c87e071ebd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
