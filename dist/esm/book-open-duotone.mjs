export const name="book-open-duotone";
export const id="dl_fd0417010aa34da29897";
export const url=new URL("../icons/book-open-duotone.svg?v=86504debdaa0448c99948ebc04dc0c2fe4e6b02872b5dd3faa48bc3c0f1d9c1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
