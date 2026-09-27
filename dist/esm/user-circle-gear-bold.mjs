export const name="user-circle-gear-bold";
export const id="dl_5fee65315661fba6545a";
export const url=new URL("../icons/user-circle-gear-bold.svg?v=2661f362bfe1e52a36244dfd8504cd5d67f5fc650e9facdbd28873ce780780d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
