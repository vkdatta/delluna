export const name="swap_horiz";
export const id="dl_cfbdd66665ac7c5c8ef0";
export const url=new URL("../icons/swap_horiz.svg?v=d79ea3c638d5b05fd1203108eca2b120b0dba6eb863338080206541e9a9b11b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
