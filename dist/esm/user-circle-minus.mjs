export const name="user-circle-minus";
export const id="dl_b4b9bb7353999d5c8faf";
export const url=new URL("../icons/user-circle-minus.svg?v=334f40d14a2b9cddadf325eaaaa9422351a4e2aa8f5f70b646a0667074d22b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
