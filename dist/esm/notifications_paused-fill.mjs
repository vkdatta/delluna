export const name="notifications_paused-fill";
export const id="dl_af0f316a6e2a4e13b3f5";
export const url=new URL("../icons/notifications_paused-fill.svg?v=bf10ff179c6246ebe9e6fc04df7f516c8350bf806909e4539d38d86b5b5fca68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
