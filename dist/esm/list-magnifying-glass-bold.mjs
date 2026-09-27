export const name="list-magnifying-glass-bold";
export const id="dl_605fb44c13c246ed8f0d";
export const url=new URL("../icons/list-magnifying-glass-bold.svg?v=abb1363995195f76a28d1a33a6c293ad973f455716f0714e64e61ab4f8c5c196",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
