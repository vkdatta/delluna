export const name="folder-open";
export const id="dl_a64ec30149124d26a278";
export const url=new URL("../icons/folder-open.svg?v=2f47d73fb5d0e5f98c869efb95efe837def3541861f53f12fb18a5c69e926fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
