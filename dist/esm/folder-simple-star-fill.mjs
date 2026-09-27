export const name="folder-simple-star-fill";
export const id="dl_17a8f6c70ae94beaaacb";
export const url=new URL("../icons/folder-simple-star-fill.svg?v=42d59c404787c888a48eeb0eefc25d0707ca9f3e9cd9edfe1be3e41a7aaf34ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
