export const name="file-png-thin";
export const id="dl_364a11041e684d709cff";
export const url=new URL("../icons/file-png-thin.svg?v=4bfd41f6529a6b80550b07bdac767b22d473beb4cb3196286fbc003f7ad2634d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
