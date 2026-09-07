export const name="image-duotone";
export const id="dl_b0f738391f774425a9ec";
export const url=new URL("../icons/image-duotone.svg?v=32c9e73a6a35d9a34649c21549737b7d129dc191836d93975d921f41184edb14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
