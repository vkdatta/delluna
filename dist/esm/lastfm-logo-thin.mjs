export const name="lastfm-logo-thin";
export const id="dl_9173c3eccf7f4d96b55e";
export const url=new URL("../icons/lastfm-logo-thin.svg?v=d0070bbbacda41f7928108f4d4c6a9a861ac6899e461f5bbfc6cf3811f0380d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
