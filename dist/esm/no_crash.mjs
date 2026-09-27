export const name="no_crash";
export const id="dl_650f6935f1b7c5aa0eba";
export const url=new URL("../icons/no_crash.svg?v=6d7d898a9f058d0f784d1431652fe6fbfa4594e99daef44f351bcff297040e95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
