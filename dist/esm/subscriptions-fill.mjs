export const name="subscriptions-fill";
export const id="dl_9b55c27837af826fe15c";
export const url=new URL("../icons/subscriptions-fill.svg?v=a36e6020c1aed0a6e24a582e50e68941605b2aac7f4f89da5c9d3836aa9013c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
