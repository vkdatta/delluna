export const name="watch_wake";
export const id="dl_89bb781d319d79ba79f2";
export const url=new URL("../icons/watch_wake.svg?v=ee07ad36deb9dc8a5d19f55f1ed500c996448be0d16d05f986f434c3a7e02eea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
