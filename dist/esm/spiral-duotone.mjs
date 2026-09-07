export const name="spiral-duotone";
export const id="dl_b8a700ea06204a24b1be";
export const url=new URL("../icons/S/spiral-duotone.svg?v=5979a74ced6bc987356bb583d97e1eea15f81012ed333362b6a10e1cf6ef9abb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
