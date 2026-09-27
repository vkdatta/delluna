export const name="border_vertical-fill";
export const id="dl_c9fad3c3b6dd0d73a82e";
export const url=new URL("../icons/border_vertical-fill.svg?v=8c9dcf2239e512d04f8a5008394429a7a244f60a8d45bd13e1e5b3b4e58cf40a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
