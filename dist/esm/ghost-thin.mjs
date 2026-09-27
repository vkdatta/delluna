export const name="ghost-thin";
export const id="dl_9306b7daf50b4f25afcb";
export const url=new URL("../icons/ghost-thin.svg?v=e14e1b31f585002eaee31841e7fe365784d73c8347f8eff4094826c86061eee0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
