export const name="notification_add";
export const id="dl_5dcad37eb9bc4dd49163";
export const url=new URL("../icons/notification_add.svg?v=166b37c59be6ea2f0baf007ac44022e78a9e4bf5b1601d35130c84236f9260a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
