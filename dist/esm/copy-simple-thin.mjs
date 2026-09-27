export const name="copy-simple-thin";
export const id="dl_4caf78b19d184cf9bfab";
export const url=new URL("../icons/copy-simple-thin.svg?v=0157e2457857d18daa83b0485eb882bd6af57755c95b5ae9d8041cefc7652524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
