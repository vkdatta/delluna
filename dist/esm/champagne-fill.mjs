export const name="champagne-fill";
export const id="dl_870b64ad42254c22b0e5";
export const url=new URL("../icons/champagne-fill.svg?v=1c769716bdc8c5a64798deb497ff7ee09c59310e4836cecc79564accd58fd9b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
