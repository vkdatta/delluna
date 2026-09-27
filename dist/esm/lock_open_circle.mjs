export const name="lock_open_circle";
export const id="dl_5b1d44c0d31d8b12eeb8";
export const url=new URL("../icons/lock_open_circle.svg?v=dadaba336c4ecbaf35b412f280d88ac25fd413315757edd32bf8b2b7ac1561de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
