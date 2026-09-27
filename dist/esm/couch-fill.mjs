export const name="couch-fill";
export const id="dl_bd6637491d7c4252a7c6";
export const url=new URL("../icons/couch-fill.svg?v=ebd9be30074404f6f7228853bc4b4e7c77b1cf0493d0cbb9a827e835005adaa2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
