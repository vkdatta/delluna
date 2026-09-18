export const name="history_2-fill";
export const id="dl_fe2d45e9e2ad442497d4";
export const url=new URL("../icons/history_2-fill.svg?v=d27b17dc716290b765aa0875e202161d28e325fb5bafe334309d12452d4dd54d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
