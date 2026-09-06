export const name="lucid_2-corner-down-left";
export const id="dl_3a5d02a20a8847eb973b";
export const url=new URL("../icons/lucid_2-corner-down-left.svg?v=7a85b65d54baa2e9b4f7761abe713c957f683b75b6d3de832c7e24d677b08292",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
