export const name="amazon-logo-light";
export const id="dl_ea69d4c45d594439a4aa";
export const url=new URL("../icons/amazon-logo-light.svg?v=91961496162d316ada2147ee7c97e46227af8fd7a74bb91d91a9301ceffcc451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
