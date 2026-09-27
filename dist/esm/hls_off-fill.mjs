export const name="hls_off-fill";
export const id="dl_80d8ca852cec2da1fd9b";
export const url=new URL("../icons/hls_off-fill.svg?v=9ea880acdbc127d08a2815bb100847d49fa04cce34fc64558da63d0a208ab6a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
