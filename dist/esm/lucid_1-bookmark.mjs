export const name="lucid_1-bookmark";
export const id="dl_9e4d90ac12bf4749a1f5";
export const url=new URL("../icons/lucid_1-bookmark.svg?v=831a50bf9657661593366e338dd4a0bed7eb06408b4268f07c2375ecbe28b5de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
