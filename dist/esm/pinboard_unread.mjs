export const name="pinboard_unread";
export const id="dl_9d564fc439f0985b3158";
export const url=new URL("../icons/pinboard_unread.svg?v=4ff5b9d0395e61b2ff1acd7c5d1a7633491ca37c2ceed81732e3162fd86bb869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
