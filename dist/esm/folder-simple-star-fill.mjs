export const name="folder-simple-star-fill";
export const id="dl_17a8f6c70ae94beaaacb";
export const url=new URL("../icons/folder-simple-star-fill.svg?v=b8abd46ea6e14641fb26c322cf1cec1f5da01760bbf856b66c56f2b5e00af34e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
