export const name="number-circle-one-light";
export const id="dl_498b26637632471b8441";
export const url=new URL("../icons/number-circle-one-light.svg?v=dc365590ee9a0f09c3acc13e5a9a2c2173530efab3b866ea2cb0c321d9c72cb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
