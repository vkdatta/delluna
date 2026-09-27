export const name="thumbs_up_down-fill";
export const id="dl_10562bc3353f0f3ac292";
export const url=new URL("../icons/thumbs_up_down-fill.svg?v=6b3755dc9cab31a274b0d7704c7f942674ba74b9ecd20d531c695ced52187340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
