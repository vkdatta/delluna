export const name="lucid_2-lock-keyhole-open";
export const id="dl_51674b7851a64b4e8a28";
export const url=new URL("../icons/lucid_2-lock-keyhole-open.svg?v=4ca934e1f200fe68e064b5df05aaa8808b02d19ff67ec0b3ce809a7e9fe9f7c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
