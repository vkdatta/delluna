export const name="soap-fill";
export const id="dl_6bc38c54a092a9867963";
export const url=new URL("../icons/soap-fill.svg?v=2fa7cbcc37a182a9e6e71008ba40c03dff46bfd2f29dc3131b5e7905a39b973b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
