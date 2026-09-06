export const name="lucid_1-book-image";
export const id="dl_4b974dd29be04f43b7aa";
export const url=new URL("../icons/lucid_1-book-image.svg?v=169d92e0414ed8872a90e9d524b71f2655d8c7e571b9587fb4d60861165dd143",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
