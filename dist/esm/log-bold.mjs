export const name="log-bold";
export const id="dl_845d1eb702714e32ab8f";
export const url=new URL("../icons/log-bold.svg?v=4c7295b4a36e3cde7325a1512a5df65676d62fcd7d6604ff5fae93cdcc1c2771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
