export const name="hangout_video_off";
export const id="dl_5eafe2a0354644fbbeae";
export const url=new URL("../icons/hangout_video_off.svg?v=fff55437da6473d55268ed4f751ab6b4ba7e471115baa205161b96f1f08320fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
