export const name="featured_play_list";
export const id="dl_c794036e84b300aefe81";
export const url=new URL("../icons/featured_play_list.svg?v=acd7d030807d25db5ce2d8bfb25fd7f3b7123c28c8d8a68822637a717ba8c1aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
