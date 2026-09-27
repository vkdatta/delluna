export const name="lucid_1-circle-chevron-up";
export const id="dl_4c4d7ba81b574c93b5df";
export const url=new URL("../icons/lucid_1-circle-chevron-up.svg?v=f45d6488c83cc39e7b5409a5dff6d8c2fdd40d32aa9fd03acf34cd63a6f720a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
