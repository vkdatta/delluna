export const name="shield_watch-fill";
export const id="dl_dc813415af304e849336";
export const url=new URL("../icons/shield_watch-fill.svg?v=f860ebf137dcf24ba2e0f820f36fbfe7f63e473f4a616c9a3c4aa819a23248c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
