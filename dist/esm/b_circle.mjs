export const name="b_circle";
export const id="dl_fbaf779b88224640850b";
export const url=new URL("../icons/b_circle.svg?v=c6a503db1a97e957d1e634cc4ae0a57275e5c7cc38af85409d9e357106936dd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
