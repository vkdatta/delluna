export const name="mastodon-logo-bold";
export const id="dl_5e023051558d4b4995a0";
export const url=new URL("../icons/mastodon-logo-bold.svg?v=214ea5be49afb7a9a8ca101aaeec3900ddd26cfcafdde846195bf623ec7b1769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
