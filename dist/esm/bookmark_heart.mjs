export const name="bookmark_heart";
export const id="dl_61cb6b877f3c6713457b";
export const url=new URL("../icons/bookmark_heart.svg?v=3f2fff7ceb2eed674b745c4fe4d91c66273445664818431c55f0c8b6f10de25a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
