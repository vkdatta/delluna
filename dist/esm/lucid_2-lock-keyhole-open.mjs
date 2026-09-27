export const name="lucid_2-lock-keyhole-open";
export const id="dl_51674b7851a64b4e8a28";
export const url=new URL("../icons/lucid_2-lock-keyhole-open.svg?v=77e5010ce0267bbda63d76dd10fbb3dfc1f45b9b75c9f91106a3e1eeb4896325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
