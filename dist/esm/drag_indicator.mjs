export const name="drag_indicator";
export const id="dl_b53c978fa132e2e6b091";
export const url=new URL("../icons/drag_indicator.svg?v=a6833fc94701693da86b60df82c4e1d5df5b25ae11f094573cdb1a8feff9f425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
