export const name="lucid_3-ship-wheel";
export const id="dl_9a2529100091499493f5";
export const url=new URL("../icons/lucid_3-ship-wheel.svg?v=18eeed91fcc281de5fde80ae03dda46de344f389177c5b3fea969812879a46e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
