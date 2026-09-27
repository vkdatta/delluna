export const name="browse_activity";
export const id="dl_4924867b845bce15e3dc";
export const url=new URL("../icons/browse_activity.svg?v=11e2e9caf195913d7e65605e5b19fabb1558fb2283027fdcc5848bd6b2633ae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
