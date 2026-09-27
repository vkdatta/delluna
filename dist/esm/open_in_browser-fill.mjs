export const name="open_in_browser-fill";
export const id="dl_b52818fd3983f424a139";
export const url=new URL("../icons/open_in_browser-fill.svg?v=3035b93d6fab7284d9e45813992a86994c70d019d76a6b140b1658cfab68bd89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
