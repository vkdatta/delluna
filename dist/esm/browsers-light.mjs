export const name="browsers-light";
export const id="dl_52bbe820156e4784bae7";
export const url=new URL("../icons/browsers-light.svg?v=ad11265577e4405afed5aeed0b53e0c7b99113d1d9a66c41907d60800af06995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
