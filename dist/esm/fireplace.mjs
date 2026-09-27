export const name="fireplace";
export const id="dl_01a3c67b750269589d7c";
export const url=new URL("../icons/fireplace.svg?v=e2889dd1ef354cef988870e97c81eb48f948e354555efdd614780c35f033a02f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
