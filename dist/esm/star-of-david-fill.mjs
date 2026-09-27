export const name="star-of-david-fill";
export const id="dl_2121bade2057ca6b47dd";
export const url=new URL("../icons/star-of-david-fill.svg?v=8cf08b9d456c419f9ca67ca0e45e1ec1514b4b9e1ce9914d9f189c4825c16ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
