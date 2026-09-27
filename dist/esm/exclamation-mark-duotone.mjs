export const name="exclamation-mark-duotone";
export const id="dl_56e80d377dc74b6780f9";
export const url=new URL("../icons/exclamation-mark-duotone.svg?v=3494e0c2d0c1c3c50fe5343caee207ec035ad9a0e5f72cfd9cdd2874a58ba6f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
