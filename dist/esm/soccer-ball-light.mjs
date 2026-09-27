export const name="soccer-ball-light";
export const id="dl_4e1d0e9eb113feb66405";
export const url=new URL("../icons/soccer-ball-light.svg?v=ed8da7b384cce4267791fd1519c2ad44e56313de505e602354926996545f3bb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
