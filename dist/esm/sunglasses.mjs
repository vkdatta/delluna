export const name="sunglasses";
export const id="dl_2f7b0ba9dd2726a9c22f";
export const url=new URL("../icons/sunglasses.svg?v=850d6511fdcd26354df9ecfafcb0ff993e91031eb8806f58275843fee87b2356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
