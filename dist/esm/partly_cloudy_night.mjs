export const name="partly_cloudy_night";
export const id="dl_317bb6e6f5ccf8d3080b";
export const url=new URL("../icons/partly_cloudy_night.svg?v=96479cdcc6b71cb076e45a72a1abb6c91bbbb2b66062f5c5d9e8eb2a98470ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
