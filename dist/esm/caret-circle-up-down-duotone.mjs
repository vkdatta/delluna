export const name="caret-circle-up-down-duotone";
export const id="dl_613fd99b16c54c479441";
export const url=new URL("../icons/caret-circle-up-down-duotone.svg?v=5b9f62ffc0e4550b21b487ef8e7bb333b512430c437e68199c35fb3bf4523f6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
