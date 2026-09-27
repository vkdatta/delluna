export const name="rewind-thin";
export const id="dl_d346a13e98c6453fa2e2";
export const url=new URL("../icons/rewind-thin.svg?v=30160e992845c9c31a63ac1dd777576f8c743d2db99e23e496ae829a8db310c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
