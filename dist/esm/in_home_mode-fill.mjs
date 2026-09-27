export const name="in_home_mode-fill";
export const id="dl_8a9179e434315d53275d";
export const url=new URL("../icons/in_home_mode-fill.svg?v=89e8c029a2fae410baeed621c58aa3b755e65c21544dc67173848cb71f89758d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
