export const name="blur_on-fill";
export const id="dl_43b4ecc9e4f74f73a235";
export const url=new URL("../icons/blur_on-fill.svg?v=787b9a46dd525766ebde6897d915aeed33297293c6a57acca6d93b5a9e356233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
