export const name="window_closed";
export const id="dl_a5edb69e2b6bbda5045f";
export const url=new URL("../icons/window_closed.svg?v=7e19f57f8c5220cbd8d6e4153fc999edc867ad6d0413ac8625ec99c66d66237a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
