export const name="caret-double-down-thin";
export const id="dl_5dbed5c2c44e453c8e9e";
export const url=new URL("../icons/caret-double-down-thin.svg?v=e09e63d6a1469b454278d8f9c01f461c14f50024de659968a48f84eec953a944",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
