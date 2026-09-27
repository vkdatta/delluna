export const name="image_inset-fill";
export const id="dl_6de314196ddcd78360ca";
export const url=new URL("../icons/image_inset-fill.svg?v=bd67b4b4f0b3b661145a98092aa4cd44334315983bb59f3190d9cdb3667c607c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
