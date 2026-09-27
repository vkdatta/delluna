export const name="lucid_1-arrow-up-to-line";
export const id="dl_869a023526744bf48fe9";
export const url=new URL("../icons/lucid_1-arrow-up-to-line.svg?v=abaf72fd6832b180ed03c95900968b8f3e665149e19e5527aa82589e46939912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
