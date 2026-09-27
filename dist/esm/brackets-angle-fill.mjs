export const name="brackets-angle-fill";
export const id="dl_a241307d59934fe48e3c";
export const url=new URL("../icons/brackets-angle-fill.svg?v=55267478ec19ab039ab4cf33fb477e6d273b58bc9c3806d249dae0a661b5dc1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
