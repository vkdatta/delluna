export const name="local_post_office-fill";
export const id="dl_36d4f885f2da5b5a1b7a";
export const url=new URL("../icons/local_post_office-fill.svg?v=d488bcda0389a16f6604f28a791254bd27866681459b0221b1c01bca4257509b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
