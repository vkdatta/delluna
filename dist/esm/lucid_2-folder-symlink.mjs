export const name="lucid_2-folder-symlink";
export const id="dl_eead05a4013d446aa8f3";
export const url=new URL("../icons/lucid_2-folder-symlink.svg?v=4dc44c3a6cae2f10e4f34454de69e21eb3956bcef87819aea20612542736c7c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
