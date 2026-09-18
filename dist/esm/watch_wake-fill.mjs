export const name="watch_wake-fill";
export const id="dl_ec3f5ac69a75443bbe2d";
export const url=new URL("../icons/watch_wake-fill.svg?v=3a669ff7eec608f673502cae4e8bceef6893c8022bb361f0a47cfa90ff8f002d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
