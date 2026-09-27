export const name="web_traffic-fill";
export const id="dl_7dc72f8dc5a32bde1e9f";
export const url=new URL("../icons/web_traffic-fill.svg?v=1902e106af91fd89b9d0077239681f2eef59dc51092cd86ee66e25efa2f6bd97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
