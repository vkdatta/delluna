export const name="airplane-tilt-duotone";
export const id="dl_c26965edab9d4d49925b";
export const url=new URL("../icons/airplane-tilt-duotone.svg?v=7420e637086aa9e3190cc23a69ac329d0d44b41c3ac11a555249e524ca82ee63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
