export const name="mastodon-logo";
export const id="dl_cced7f9c34d74c2b9e35";
export const url=new URL("../icons/mastodon-logo.svg?v=582ae08e28fb08501f9bd1f45d7e778023d5a0ef0b3f651140537b2630e30c66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
