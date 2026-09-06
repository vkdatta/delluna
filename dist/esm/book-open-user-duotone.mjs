export const name="book-open-user-duotone";
export const id="dl_2293973717fd407999c9";
export const url=new URL("../icons/book-open-user-duotone.svg?v=795bc53b30414c9df56ff8249304bdf9f8cfc283f6c0ea67c437b1841acecf6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
