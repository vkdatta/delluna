export const name="corners-out";
export const id="dl_84afe6baac3746aabf4a";
export const url=new URL("../icons/corners-out.svg?v=5374922d4229153f8d121ecb2dbb204fd991f29d3577adfaaf01a23935d38bec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
