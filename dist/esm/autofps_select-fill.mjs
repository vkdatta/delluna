export const name="autofps_select-fill";
export const id="dl_0a68ac306db9864d684c";
export const url=new URL("../icons/autofps_select-fill.svg?v=1c6a4c6cecde5612177df1906f2efa47da919626975e774eba1586832fd73789",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
