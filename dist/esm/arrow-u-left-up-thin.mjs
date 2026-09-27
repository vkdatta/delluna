export const name="arrow-u-left-up-thin";
export const id="dl_0c06c0ce8fb646a6a68b";
export const url=new URL("../icons/arrow-u-left-up-thin.svg?v=71ef96bf401ffa02eff670c0d0b3ca7ee80663f217269dc97a7e8aad7ef92ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
