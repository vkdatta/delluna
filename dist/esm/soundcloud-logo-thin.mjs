export const name="soundcloud-logo-thin";
export const id="dl_5145725a531f0d7e8084";
export const url=new URL("../icons/soundcloud-logo-thin.svg?v=c6e036eb5cb076e9e700c2820e7e48e9307ab70bfc91ee27ee51cd878d320aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
