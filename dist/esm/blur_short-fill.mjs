export const name="blur_short-fill";
export const id="dl_9dfb51700ccb375fcc4c";
export const url=new URL("../icons/blur_short-fill.svg?v=ed0dcd70513394a164c1c8a462853f08045f736a6fdeec50d8205f870f0ee1b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
