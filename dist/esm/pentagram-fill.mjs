export const name="pentagram-fill";
export const id="dl_50716e029be74916a72a";
export const url=new URL("../icons/pentagram-fill.svg?v=c446d1fbe3c2ee1993833db4642ff9d71a43b7a0b9e7dfa58cd8ff1b83a3d232",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
