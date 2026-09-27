export const name="toggle_on-fill";
export const id="dl_6d173a62e26020c71b17";
export const url=new URL("../icons/toggle_on-fill.svg?v=c421bc331114fade87ec6bcabd5d9e43c0fa6a342d39836e8e15f04609fcbf02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
