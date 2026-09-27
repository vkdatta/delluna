export const name="check_circle-fill";
export const id="dl_1038dc11e0ba81033442";
export const url=new URL("../icons/check_circle-fill.svg?v=ea924fa20230eb52a73b785c0cdde3cdb39acd7bc3677d2e444d8595fd9cb33b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
