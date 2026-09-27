export const name="signal_disconnected-fill";
export const id="dl_6f6e9952b3023663661f";
export const url=new URL("../icons/signal_disconnected-fill.svg?v=b457ad96ee79df2aabbb12a59ce5f9559c19d8ada09c94e539fb0eae8f0cb50e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
