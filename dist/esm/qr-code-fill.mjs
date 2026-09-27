export const name="qr-code-fill";
export const id="dl_7faae22a07984e88ade0";
export const url=new URL("../icons/qr-code-fill.svg?v=ad0d983bbddf43a8584ef90beb4f2b651363169220d0438c620d8bcdbe30c5a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
