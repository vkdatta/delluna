export const name="bowl-steam-thin";
export const id="dl_5269aad3c09242e5a6d0";
export const url=new URL("../icons/bowl-steam-thin.svg?v=77b63e70d168d1d8d50c0a3d0bf077584cbc8db09057d9cda1fee2908c4b2b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
