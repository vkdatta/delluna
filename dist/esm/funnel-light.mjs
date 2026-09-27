export const name="funnel-light";
export const id="dl_a5a2d587972e4902a198";
export const url=new URL("../icons/funnel-light.svg?v=bdde90631c10951f45d61ad1684cbf56f2ef7db3456d3edc4ff76b1e7843d612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
