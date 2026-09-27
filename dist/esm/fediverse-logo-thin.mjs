export const name="fediverse-logo-thin";
export const id="dl_0fe4e60caddb4ec2b1fd";
export const url=new URL("../icons/fediverse-logo-thin.svg?v=32a8833a34ba3ebdc13916da6c661d211a0d068dcedb1020bd10488097cf94b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
