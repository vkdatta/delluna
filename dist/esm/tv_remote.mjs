export const name="tv_remote";
export const id="dl_d669d6b8bf62682692ca";
export const url=new URL("../icons/tv_remote.svg?v=f377b65e4e48d376705859ecbc3383af1a97b264bb440a5baf90f0e8d54ac502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
