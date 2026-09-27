export const name="placeholder";
export const id="dl_5f2ce84ad16e419da8ea";
export const url=new URL("../icons/placeholder.svg?v=dd656e401b580d20874b13328fbb1693134a1fbbe097df4be20e079dc1dcb67c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
