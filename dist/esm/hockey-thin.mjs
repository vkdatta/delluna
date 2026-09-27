export const name="hockey-thin";
export const id="dl_8e2c4454ff3c41cabc9a";
export const url=new URL("../icons/hockey-thin.svg?v=a5240adb8cd738dc0678dd2f1c2a53ea456bcf3db779d14e9e8848264c745850",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
