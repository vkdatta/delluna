export const name="sort-descending-bold";
export const id="dl_6b5c98ae95c5469cafa2";
export const url=new URL("../icons/S/sort-descending-bold.svg?v=5eb2c43bbbcc68edd92fcdde8581683d7b17c71394a45cbc17b60d616653dbe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
