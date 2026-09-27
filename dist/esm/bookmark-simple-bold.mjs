export const name="bookmark-simple-bold";
export const id="dl_bce91a0c970647c2bec7";
export const url=new URL("../icons/bookmark-simple-bold.svg?v=2601f601b3818347478a9729e2dc2b384507f0f5da60218ad10823cd920494e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
