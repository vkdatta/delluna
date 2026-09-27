export const name="mobile_theft";
export const id="dl_3b206c5f2e7b9c8d94d2";
export const url=new URL("../icons/mobile_theft.svg?v=16a264b9ea9c3561225e6a0e3d0f6a281e7f9c7d774a2f07fed20994d28832e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
