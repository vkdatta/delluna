export const name="notion-logo-duotone";
export const id="dl_62575c73e16d4836938a";
export const url=new URL("../icons/notion-logo-duotone.svg?v=114edfab43d53087e9ef516e257013dc0b5ef00058f29dad5be103d7abb92289",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
