export const name="lucid_3-search-code";
export const id="dl_e422ed7d46694499aefd";
export const url=new URL("../icons/lucid_3-search-code.svg?v=08162c30c14646bc5771a7cbf6b1983f272f48103111b8ecf751b0e134b96e73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
