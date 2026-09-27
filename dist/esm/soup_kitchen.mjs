export const name="soup_kitchen";
export const id="dl_7e5fe4e45f68899a35c9";
export const url=new URL("../icons/soup_kitchen.svg?v=b57eacd4123ec70ce42ed33c29143b9ac4ac1f7ff6b80be4483d4739caa5cdc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
