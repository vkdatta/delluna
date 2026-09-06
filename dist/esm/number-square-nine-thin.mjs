export const name="number-square-nine-thin";
export const id="dl_0ed2ad49f2904ef09691";
export const url=new URL("../icons/number-square-nine-thin.svg?v=8dcb70f56d16905a66fb07fd7085cb1dc68486df6aab5db4e13e39187491703c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
