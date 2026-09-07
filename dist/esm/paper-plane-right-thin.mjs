export const name="paper-plane-right-thin";
export const id="dl_897696c029c3477ab2cc";
export const url=new URL("../icons/paper-plane-right-thin.svg?v=8417659bdf98d6b2305b6eecd1ec8aa433521bee618d7cad7a7e482ba4d9b03c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
