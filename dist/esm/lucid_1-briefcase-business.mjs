export const name="lucid_1-briefcase-business";
export const id="dl_a67c8090dd664d3aaf9a";
export const url=new URL("../icons/lucid_1-briefcase-business.svg?v=20ca0ddb386d9a4767e5792820f6389c62b9a5733331f02df34c10521f43b581",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
