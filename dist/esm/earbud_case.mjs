export const name="earbud_case";
export const id="dl_b1d8507eb56545c596e1";
export const url=new URL("../icons/E/earbud_case.svg?v=0d56c9eaac723fec817ca04b29809a49c1b7ab1e082c4a238dae87004df127f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
