export const name="vo2_max";
export const id="dl_d13dbf844a44fbc1dddd";
export const url=new URL("../icons/vo2_max.svg?v=fe31543f6a657fb2b1dcadfbb81f6965fff72b4320481bdfeeaebfa469ac2cf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
