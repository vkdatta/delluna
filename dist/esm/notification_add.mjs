export const name="notification_add";
export const id="dl_7d9f49c6eca27d8835e2";
export const url=new URL("../icons/notification_add.svg?v=e0bba3f19cf7a362bcfb13c285e1f63b6b21b76a4ddc362fb7c7d658e5a05d8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
