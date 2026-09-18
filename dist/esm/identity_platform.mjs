export const name="identity_platform";
export const id="dl_64d1dbd2fca84e4d9cf8";
export const url=new URL("../icons/identity_platform.svg?v=f38b291ef80679e811050faab927e02bd4d4d01b4f08ad883a918a1c4ba699c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
