export const name="playlist_play";
export const id="dl_9b199577c69ea4afacb9";
export const url=new URL("../icons/playlist_play.svg?v=5ea9fbe6457b74a1e822c54f26cf576fb392977f8217557cb2a491fa93ec9db4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
