export const name="book-open-user";
export const id="dl_f0ba3089b3864f9589ba";
export const url=new URL("../icons/book-open-user.svg?v=a990e1796c20de053d08778df31c066b02989acbd7ba7c5ad8bdb709873ffcb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
