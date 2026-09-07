export const name="lucid_3-search-slash";
export const id="dl_7ee37ef433204603bff4";
export const url=new URL("../icons/lucid_3-search-slash.svg?v=fffec43ac7a994a3afc1c12c4ba2ab6a2627a8971a3db8fbf9e9d2a1efe22784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
