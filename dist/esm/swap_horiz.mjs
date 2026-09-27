export const name="swap_horiz";
export const id="dl_cfbdd66665ac7c5c8ef0";
export const url=new URL("../icons/swap_horiz.svg?v=97e0e820ef128c4fde8ed52f69d278d303497f42eeab8b0baa7fa5b6576f8382",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
