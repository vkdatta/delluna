export const name="person-simple-snowboard";
export const id="dl_8bdcf1f49b1d42f39b4a";
export const url=new URL("../icons/person-simple-snowboard.svg?v=d1c2210117f8d9647526a8daef7683d53101464775f817869efff7897a7280d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
