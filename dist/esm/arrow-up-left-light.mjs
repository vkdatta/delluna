export const name="arrow-up-left-light";
export const id="dl_8a9eaaa80f454e5aa75c";
export const url=new URL("../icons/arrow-up-left-light.svg?v=f92d56fb8aadf2e8e9c7a5c4715b166c9562bcb0fc173f78e248c83a2395d752",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
