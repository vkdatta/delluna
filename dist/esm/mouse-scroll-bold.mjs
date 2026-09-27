export const name="mouse-scroll-bold";
export const id="dl_163036040db143dba567";
export const url=new URL("../icons/mouse-scroll-bold.svg?v=e0201570d131ad575eb9664a96aa0f6a0cabf512499af3f6cbea0a888d38d490",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
