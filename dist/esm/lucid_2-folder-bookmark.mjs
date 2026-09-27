export const name="lucid_2-folder-bookmark";
export const id="dl_d2ab403ad6dc4e008491";
export const url=new URL("../icons/lucid_2-folder-bookmark.svg?v=b500bd0b076346d4163944f67c58f29242091b8171cea5f16c5883833b5b7c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
