export const name="falling-fill";
export const id="dl_70e8843367344d72b6f6";
export const url=new URL("../icons/falling-fill.svg?v=7ee01871907f68a1eb876b47822a9c0c789ef1c7061827e016ef348bf5c84c88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
