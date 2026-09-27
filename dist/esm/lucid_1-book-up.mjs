export const name="lucid_1-book-up";
export const id="dl_857bf47578634108b7a3";
export const url=new URL("../icons/lucid_1-book-up.svg?v=ac49841ac80aab545599e13274de56f1ec8098de496d2b1e1ae68516edff6b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
