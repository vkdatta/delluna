export const name="lucid_3-recycle";
export const id="dl_fb5ec6e4e9474553985e";
export const url=new URL("../icons/lucid_3-recycle.svg?v=b4721cba7ab151d07f456e313218df6073247b51cd79220e98a920dba6a83a55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
