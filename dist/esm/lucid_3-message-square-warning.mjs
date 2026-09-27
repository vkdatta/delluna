export const name="lucid_3-message-square-warning";
export const id="dl_1eb59017d35742289f77";
export const url=new URL("../icons/lucid_3-message-square-warning.svg?v=e3d784ac7cf3c266fc2772ab93a847270b9a35967c6cb51991e67bf0fd1b51fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
