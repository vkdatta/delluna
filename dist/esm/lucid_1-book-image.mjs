export const name="lucid_1-book-image";
export const id="dl_4b974dd29be04f43b7aa";
export const url=new URL("../icons/lucid_1-book-image.svg?v=9caf7073c900db93a0d65dcb981b4671c1a6a3a7d880715f9ddfb7877b966a87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
