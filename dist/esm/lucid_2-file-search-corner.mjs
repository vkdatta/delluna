export const name="lucid_2-file-search-corner";
export const id="dl_ddf05c210cb34cc39ccf";
export const url=new URL("../icons/lucid_2-file-search-corner.svg?v=536e86cd7ae7481c01a1a2ab7ce89a625d76456b05eecdd7ce1e552747b42c16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
