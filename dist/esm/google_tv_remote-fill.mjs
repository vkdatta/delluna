export const name="google_tv_remote-fill";
export const id="dl_37f6691486c41de4ba12";
export const url=new URL("../icons/google_tv_remote-fill.svg?v=147d7a61ceb8cc7b74feb2b9b4b9f5c119d678413eb050df1efe12dde0be5b73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
