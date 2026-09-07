export const name="lock-key-open-bold";
export const id="dl_9448b948442a40a8bdbe";
export const url=new URL("../icons/lock-key-open-bold.svg?v=832edede820eb1569c3b5ec9f0fabcb8ec45190833eebd6cc30e5af95ada8571",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
