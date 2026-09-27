export const name="google-photos-logo-fill";
export const id="dl_891baf93941d4c818b97";
export const url=new URL("../icons/google-photos-logo-fill.svg?v=9ab1eeb9fd55e71f25e18d672d9daa3c064739d02b33019f0e79b7fb2a35dc00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
