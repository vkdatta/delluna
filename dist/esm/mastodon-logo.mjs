export const name="mastodon-logo";
export const id="dl_cced7f9c34d74c2b9e35";
export const url=new URL("../icons/mastodon-logo.svg?v=6182e8085977ab564a2279f4d367c4c7e08c632c9c8dece46f83bfb182648eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
