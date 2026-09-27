export const name="tire-duotone";
export const id="dl_30383c44162d535f587f";
export const url=new URL("../icons/tire-duotone.svg?v=239ef6720137243ef76af3b85054c9757129caba9a02e94a0e34b3b03ba6707c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
