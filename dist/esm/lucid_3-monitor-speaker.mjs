export const name="lucid_3-monitor-speaker";
export const id="dl_255bedd8f77349cea81e";
export const url=new URL("../icons/lucid_3-monitor-speaker.svg?v=b873d6e183e43d7cf4c661bd6c01aeab1aa743a61b4a4912119d5ca1ed771b4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
