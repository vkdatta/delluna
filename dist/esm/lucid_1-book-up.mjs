export const name="lucid_1-book-up";
export const id="dl_857bf47578634108b7a3";
export const url=new URL("../icons/lucid_1-book-up.svg?v=e33564ad5cf5cef7b8919e9d0efa3dda067d732d62bfdfb4861c500fd5bcc693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
