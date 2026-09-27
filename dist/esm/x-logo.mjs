export const name="x-logo";
export const id="dl_3e7a859bed0d0f829b28";
export const url=new URL("../icons/x-logo.svg?v=b674e3a19d1e77e7b94a13ac5f453b6049647aaebc40768cf276549d508b06fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
