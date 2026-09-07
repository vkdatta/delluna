export const name="lucid_1-circle-chevron-up";
export const id="dl_4c4d7ba81b574c93b5df";
export const url=new URL("../icons/lucid_1-circle-chevron-up.svg?v=b61c19cde2b1ebc37ff15433530933150f26b427718064fb85c999486b9e1f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
