export const name="lucid_1-book-x";
export const id="dl_b613d65e42f34e0294e0";
export const url=new URL("../icons/lucid_1-book-x.svg?v=a675aeea2c815e23cb962d795bf519c433b7179655037de7f8ef63d870f7cc5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
