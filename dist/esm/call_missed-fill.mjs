export const name="call_missed-fill";
export const id="dl_9acd71c773eb691c6f94";
export const url=new URL("../icons/call_missed-fill.svg?v=0a8fa5cd0b37163c0bb8d587a9c5dd493b0ac14d127f0541dcf6a32c57f6e095",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
