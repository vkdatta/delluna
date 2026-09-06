export const name="bookmarks-bold";
export const id="dl_1c2ae6136d7f4e6da953";
export const url=new URL("../icons/bookmarks-bold.svg?v=47258e7650a69ee06a5102f290c395a0a074d86fd5a48970d253b615995901f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
