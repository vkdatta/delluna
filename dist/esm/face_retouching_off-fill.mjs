export const name="face_retouching_off-fill";
export const id="dl_a8ae65893ae943a7af1f";
export const url=new URL("../icons/face_retouching_off-fill.svg?v=d5c8e29a67ef9ef0cf3de3144668bee7bb49a9c4e00370f822b79eab60d44824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
