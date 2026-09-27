export const name="lucid_1-briefcase-business";
export const id="dl_a67c8090dd664d3aaf9a";
export const url=new URL("../icons/lucid_1-briefcase-business.svg?v=462a71c3b226cb8667761802632c71017f88ac813e6c3131ed3e820f5b8f1584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
