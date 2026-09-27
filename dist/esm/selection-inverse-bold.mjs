export const name="selection-inverse-bold";
export const id="dl_2ad3f8b63080ce6012ae";
export const url=new URL("../icons/selection-inverse-bold.svg?v=e7fb2a3e831bb7881f4741a11a25a3dc1085a20b9c3e80864b547fc69dc9da88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
