export const name="mastodon-logo-thin";
export const id="dl_8615de185b5b412d83ab";
export const url=new URL("../icons/mastodon-logo-thin.svg?v=3a3f2fd2ab52ca02c6c01c63f75c89b84cf8562f7e2f1f73003a1afa9133ca55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
