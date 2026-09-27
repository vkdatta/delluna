export const name="bookmark_flag-fill";
export const id="dl_28482b128ff86881d9fb";
export const url=new URL("../icons/bookmark_flag-fill.svg?v=47974ce5c85b08ffd58b6733451d487a9190ffdd20565538fef0472aefc1a8c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
