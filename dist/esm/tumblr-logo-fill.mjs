export const name="tumblr-logo-fill";
export const id="dl_9218d1548e80440da0cd";
export const url=new URL("../icons/T/tumblr-logo-fill.svg?v=c508735e60e4a78c5da27544ae11f7ff4c81a7ca8270d18ee55a8f00dbb1969e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
