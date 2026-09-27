export const name="spinner-gap-fill";
export const id="dl_29c054147ebba78e959e";
export const url=new URL("../icons/spinner-gap-fill.svg?v=c77ddd9142db312c3fa6b6b1b6ed0b71154f1b645ddd19af3f7a5b8fc55d9f44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
