export const name="rainbow";
export const id="dl_df28536f284f4115b11c";
export const url=new URL("../icons/rainbow.svg?v=6afe38c5eab3e8a9fe42819e7cacfbce6ab07ae6bb1b6ba8b0334539e9c247e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
