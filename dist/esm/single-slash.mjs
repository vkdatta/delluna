export const name="single-slash";
export const id="dl_d6f4f7c0681eef5a952d";
export const url=new URL("../icons/single-slash.svg?v=cd1a90a245027aa83e9e95db2b82cf9ec73be324f4d08ac50c26a38267fdae3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
