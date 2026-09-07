export const name="lock-open";
export const id="dl_6b4675e037f4432abe53";
export const url=new URL("../icons/lock-open.svg?v=8b9f2b734cf20b70327b569ae4e254d5899771b6ea886bb6e9a2facde5582c04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
