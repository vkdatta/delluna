export const name="subscriptions";
export const id="dl_1a47db3f0bb0fbf4fb42";
export const url=new URL("../icons/subscriptions.svg?v=840dede5b0a1858f5ada0fbbdb6931c86949c1c245d6b5c220de99bbf60a76c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
