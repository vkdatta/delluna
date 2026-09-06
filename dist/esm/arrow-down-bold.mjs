export const name="arrow-down-bold";
export const id="dl_03f962b11ba9412f9392";
export const url=new URL("../icons/arrow-down-bold.svg?v=193222b87a796f1c56336f51cb041cfd2a6c899ae0a027248a63fc183758a364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
