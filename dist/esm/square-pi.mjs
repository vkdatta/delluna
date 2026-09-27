export const name="square-pi";
export const id="dl_27c979c38abb407bb26a";
export const url=new URL("../icons/square-pi.svg?v=de892456e535e704f4375296706522008e98806c57a81c6c5a561f8abadd191c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
