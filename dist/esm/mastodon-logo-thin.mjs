export const name="mastodon-logo-thin";
export const id="dl_8615de185b5b412d83ab";
export const url=new URL("../icons/mastodon-logo-thin.svg?v=7850f121b30a61817de40fa7363384760f6f48fe2f863d98f8d4814731580bbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
