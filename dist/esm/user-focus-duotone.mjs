export const name="user-focus-duotone";
export const id="dl_ad51e46650c946f68e47";
export const url=new URL("../icons/U/user-focus-duotone.svg?v=7e0815457e65da664500eb64b4a38b5f6bfcfd3ddc7b02728bf83a423911bfd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
