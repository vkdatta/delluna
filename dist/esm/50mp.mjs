export const name="50mp";
export const id="dl_48ae21b7c8945746804c";
export const url=new URL("../icons/50mp.svg?v=0db0f50edfe1e2fb2643bf8b4622eb3db7e11c5c57fc2707215992e92cecc512",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
