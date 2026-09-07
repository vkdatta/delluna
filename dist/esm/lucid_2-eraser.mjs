export const name="lucid_2-eraser";
export const id="dl_61c57c16789845489ea9";
export const url=new URL("../icons/lucid_2-eraser.svg?v=5f4c99664893bc553104db970a5adf260c386430a742b9a534fb99396c0d7e7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
