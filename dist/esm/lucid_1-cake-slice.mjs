export const name="lucid_1-cake-slice";
export const id="dl_2b7379ab5f57471d94c5";
export const url=new URL("../icons/lucid_1-cake-slice.svg?v=6410a1ff74640604af667436c21e36fc75351bcdd224478ec64428a87ffdffdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
