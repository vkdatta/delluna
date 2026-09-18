export const name="post_add";
export const id="dl_8aea2ecce63a475a849a";
export const url=new URL("../icons/P/post_add.svg?v=a757a7e5c226c9a16c7b1314d418effb47d31f3c9c04427d7cc853e84f4501a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
