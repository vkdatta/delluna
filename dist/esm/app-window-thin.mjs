export const name="app-window-thin";
export const id="dl_9b949910b26848fdafff";
export const url=new URL("../icons/app-window-thin.svg?v=f2ee1f9a586e77b4edd6cf291c99161a35931ed8f7f5f7de9edd575d78ad1efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
