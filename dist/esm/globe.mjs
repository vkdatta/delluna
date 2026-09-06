export const name="globe";
export const id="dl_b5f3f5a65a074bcba617";
export const url=new URL("../icons/globe.svg?v=3b53d207c09fc72de699c8b2149892e065b570b3ae144412ae53244b0a0f7977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
