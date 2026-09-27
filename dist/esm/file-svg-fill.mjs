export const name="file-svg-fill";
export const id="dl_8e5cc18f7f09445a91d9";
export const url=new URL("../icons/file-svg-fill.svg?v=ee2d4588e9f9104910218d0dc0e07910d32705ada7d8ae416e22e8562baf858b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
