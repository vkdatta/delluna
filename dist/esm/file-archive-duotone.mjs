export const name="file-archive-duotone";
export const id="dl_474853a4b11c4d6286b1";
export const url=new URL("../icons/file-archive-duotone.svg?v=9ce89c025a4fa2ac9bce3905e28d44e36d408e1686c94a9e130ec7adb7526ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
