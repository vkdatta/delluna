export const name="mastodon-logo-bold";
export const id="dl_5e023051558d4b4995a0";
export const url=new URL("../icons/mastodon-logo-bold.svg?v=1096585bfd192a497e78a9171790eb8dbf3716529cfeb79a6ae7b80e8d04264b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
