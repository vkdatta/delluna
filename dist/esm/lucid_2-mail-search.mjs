export const name="lucid_2-mail-search";
export const id="dl_abcee0f47c4e4a0196b4";
export const url=new URL("../icons/lucid_2-mail-search.svg?v=68f2632f8d6fd567f2c0bffc7b909f8f879d81b4caae53387df3944a3f73355a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
