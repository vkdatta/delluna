export const name="open_with-fill";
export const id="dl_54bcf5815c5c0ef2140b";
export const url=new URL("../icons/open_with-fill.svg?v=11aaa3afce4b56be3ab4cb5534a0558851cf319c550d2c6068676496e333db04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
