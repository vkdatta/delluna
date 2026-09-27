export const name="key_vertical";
export const id="dl_bf81e503ff844c295260";
export const url=new URL("../icons/key_vertical.svg?v=a2567ef55324d691bc3d904a0d0ee9c19188fb36d8ead60a3d2362abebd347d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
