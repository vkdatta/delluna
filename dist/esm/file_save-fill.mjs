export const name="file_save-fill";
export const id="dl_b62e31ff4db00f7fb036";
export const url=new URL("../icons/file_save-fill.svg?v=9c1d4c7cae1d20ce6fee9720b81a522812c4999c7189ec871d003c87e7233950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
