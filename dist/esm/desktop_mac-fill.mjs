export const name="desktop_mac-fill";
export const id="dl_9b262ac2d5fa4edb8127";
export const url=new URL("../icons/desktop_mac-fill.svg?v=3a99e7548cb9e381bac32a6fb82b6e34fb52bd6d7325dc9001d9c76f631a897b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
