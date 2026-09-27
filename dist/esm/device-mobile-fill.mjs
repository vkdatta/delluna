export const name="device-mobile-fill";
export const id="dl_165831da0c704573b698";
export const url=new URL("../icons/device-mobile-fill.svg?v=d5872e41838d06821ad753db0395e78fc80838f945bca7b6925f279dbf106043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
