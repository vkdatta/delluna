export const name="lucid_1-arrow-left-right";
export const id="dl_421809b335954aa3a855";
export const url=new URL("../icons/lucid_1-arrow-left-right.svg?v=4f7f22bd2d674ed62b66fda69aefb4e07cf29a8a29c338e6eb7a39f18db6791e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
