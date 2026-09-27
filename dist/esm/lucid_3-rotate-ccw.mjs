export const name="lucid_3-rotate-ccw";
export const id="dl_a4a83fcb22cf4835b9b3";
export const url=new URL("../icons/lucid_3-rotate-ccw.svg?v=9e1488e6c2f6af63a4cd5d537bf98645467c32fae7fcb80faf3a8b160ee3fff9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
