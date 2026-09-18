export const name="monitor_heart-fill";
export const id="dl_18091d5e26ca42cf958d";
export const url=new URL("../icons/M/monitor_heart-fill.svg?v=e9fbb255466aaae4b2f4ef87f7d455129f2991fae204f4e0c2e4f0659e708b83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
