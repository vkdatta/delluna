export const name="chevron_backward-fill";
export const id="dl_8852cd4f864fe72b0e79";
export const url=new URL("../icons/chevron_backward-fill.svg?v=f59ef7490dd72544d6af04ca751e4fbb3a564c625e15c957825a469122db762c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
