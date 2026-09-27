export const name="local_taxi";
export const id="dl_fa21e207c549b6797d4b";
export const url=new URL("../icons/local_taxi.svg?v=eb0dc7d3d97d651d6520ba03d68e52ad3281271c41a3ebe377d0d3b8e341c953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
