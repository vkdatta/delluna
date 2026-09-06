export const name="desktop";
export const id="dl_9aee8ae259a84751a669";
export const url=new URL("../icons/desktop.svg?v=875a31fd2dc493c6ba9aa5187a91e0364de6704876704e1bf81ef4b7e785ad79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
