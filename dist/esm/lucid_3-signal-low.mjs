export const name="lucid_3-signal-low";
export const id="dl_cd00ea04d5bc4f39b6a7";
export const url=new URL("../icons/lucid_3-signal-low.svg?v=59db55f65468e307bbb33e9b8baf0cbea4e76f6fe216644d7416b9f23666913d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
