export const name="microwave-fill";
export const id="dl_48c165fdd3b14231e1a5";
export const url=new URL("../icons/microwave-fill.svg?v=73f439e7d5a231c89df02a65ddc3cb4a53a31f03fcc4f8050137d670cc95a8ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
