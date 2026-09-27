export const name="lucid_2-file-search-corner";
export const id="dl_ddf05c210cb34cc39ccf";
export const url=new URL("../icons/lucid_2-file-search-corner.svg?v=54a42a142fb249bb5e5ecf55c4ae614c073cee60c95611eba6ce78244a6d52f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
