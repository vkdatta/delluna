export const name="tab_close_right";
export const id="dl_a37e3e8bb34081581df8";
export const url=new URL("../icons/tab_close_right.svg?v=2380a9d13c243b0652d86897f5f34a22cec806fd03ccd47eb7006f28c61c3f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
