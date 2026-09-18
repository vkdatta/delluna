export const name="multimodal_hand_eye-fill";
export const id="dl_fe471368110441fea453";
export const url=new URL("../icons/M/multimodal_hand_eye-fill.svg?v=df3abe1ae5b1e55fe5122cf3f108cc1a72c99157fbadaf1fab2bb0aefd258e2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
