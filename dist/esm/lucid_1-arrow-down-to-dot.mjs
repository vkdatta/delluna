export const name="lucid_1-arrow-down-to-dot";
export const id="dl_a33f30a36a6943a186d1";
export const url=new URL("../icons/lucid_1-arrow-down-to-dot.svg?v=ae19eb5585802b9edc34e231bc66e04ef91dbe1b33314ab7de5c928c7b160fcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
