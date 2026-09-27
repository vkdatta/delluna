export const name="lucid_1-arrow-up-from-dot";
export const id="dl_02f1dafef01e44359a52";
export const url=new URL("../icons/lucid_1-arrow-up-from-dot.svg?v=5ac71e248454dcc19a32976d703d18640ad62de5c27c278ad4c347680a7e6337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
