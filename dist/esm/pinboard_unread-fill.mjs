export const name="pinboard_unread-fill";
export const id="dl_cca11c94ac7a464e8e57";
export const url=new URL("../icons/P/pinboard_unread-fill.svg?v=0621cf00631be8e3f961dbeff348793137be7b75290f9c88b0d380e1d7ee0353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
