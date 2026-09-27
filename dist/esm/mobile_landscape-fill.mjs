export const name="mobile_landscape-fill";
export const id="dl_b53f6d99893463d23463";
export const url=new URL("../icons/mobile_landscape-fill.svg?v=23347a07fb77b3d3098e95bbcb6c0cc0a4e2609677da6c176634a37024ac173d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
