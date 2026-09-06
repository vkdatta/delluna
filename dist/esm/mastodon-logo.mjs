export const name="mastodon-logo";
export const id="dl_cced7f9c34d74c2b9e35";
export const url=new URL("../icons/mastodon-logo.svg?v=62fc3f40ea08c28fb96e1d700c9c24b24fe93e24370c18b07bf3f419928989dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
