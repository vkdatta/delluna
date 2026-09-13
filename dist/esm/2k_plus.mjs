export const name="2k_plus";
export const id="dl_774b2ef34f0c4a659897";
export const url=new URL("../icons/2/2k_plus.svg?v=7c7f9a9c4d5f359dd5502d402f17f93d6745020059b633f1346b3832f0f4b92b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
