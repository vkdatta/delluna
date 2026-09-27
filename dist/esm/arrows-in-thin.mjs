export const name="arrows-in-thin";
export const id="dl_04d5d06758ee42c98c8e";
export const url=new URL("../icons/arrows-in-thin.svg?v=cd4891114eefb168bc0e0b2a0a456c54e781b5c521433dc79cdfc67d3b4c72e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
