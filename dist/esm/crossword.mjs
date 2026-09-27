export const name="crossword";
export const id="dl_cc5c7af0c39643a2335e";
export const url=new URL("../icons/crossword.svg?v=7b368f2c99f96072981897c1a84f89ada5a89db796168e64e54e3dbc22184315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
