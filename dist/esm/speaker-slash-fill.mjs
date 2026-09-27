export const name="speaker-slash-fill";
export const id="dl_426b3dd5d14a4584fa7e";
export const url=new URL("../icons/speaker-slash-fill.svg?v=260fbf612c914ea3635c7d38cd787fa2fa90bc988ca3b9ff6427ae7cf0924e18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
