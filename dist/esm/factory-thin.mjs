export const name="factory-thin";
export const id="dl_9226995c1ed84ba2af03";
export const url=new URL("../icons/factory-thin.svg?v=5acc8f0a0771f20efe95451e3659e224af711282f24b9cd2885c79b415b0af1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
