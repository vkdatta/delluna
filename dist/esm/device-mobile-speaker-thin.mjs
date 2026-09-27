export const name="device-mobile-speaker-thin";
export const id="dl_9c469817d0104233870a";
export const url=new URL("../icons/device-mobile-speaker-thin.svg?v=e3c61c8335ee2e40be9908b8f2e5ac98d29c54f68dd6da5394e02967a91f2417",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
