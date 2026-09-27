export const name="hangout_video_off-fill";
export const id="dl_22376a01da6623d29921";
export const url=new URL("../icons/hangout_video_off-fill.svg?v=b98c0f8eee3f6186c07a9afb83dd374358c074808d1a1ec4e2fd5df22a5cb82c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
