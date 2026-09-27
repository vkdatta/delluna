export const name="flex_wrap";
export const id="dl_2fdfabf23253ca3db97c";
export const url=new URL("../icons/flex_wrap.svg?v=72f54894615eb9190a347ac9471357fc90c63be1e42f9a31adbdc195ed81eaaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
