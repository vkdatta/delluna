export const name="alternate_email-fill";
export const id="dl_5c2a408f3087e3260f79";
export const url=new URL("../icons/alternate_email-fill.svg?v=a645bfe3fcdc3ebc10fc4371a67f7e0801a5144410e169dc87968078a85b6a8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
