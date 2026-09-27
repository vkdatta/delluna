export const name="couch-thin";
export const id="dl_824f3f7a570d4f549566";
export const url=new URL("../icons/couch-thin.svg?v=531af1b667b624e73a3f4ccf7483ac73931f0bf6dd639ca7f094be1a1009dc5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
