export const name="mastodon-logo-bold";
export const id="dl_5e023051558d4b4995a0";
export const url=new URL("../icons/mastodon-logo-bold.svg?v=7009aecac09988d9b6ae47ad60e0848bd61d9f711e5c6166f3a5422b97c18d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
