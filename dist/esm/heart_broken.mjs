export const name="heart_broken";
export const id="dl_4c58d870abd24362a421";
export const url=new URL("../icons/H/heart_broken.svg?v=1c2a1a967f825e3ade6a4cfc8d9913afc5a4ffc6bcc76cfc6fe4beeeeac6fda0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
