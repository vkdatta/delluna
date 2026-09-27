export const name="scan-smiley-fill";
export const id="dl_20c4d38fa3fa3146877a";
export const url=new URL("../icons/scan-smiley-fill.svg?v=4e04ff0cb4574388ad8d0e6706089f63039e53e175a5ae6762a91deb6ffc8a09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
