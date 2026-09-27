export const name="notification_add-fill";
export const id="dl_baa02286d6cb16b50ec6";
export const url=new URL("../icons/notification_add-fill.svg?v=bd9992e2e9111f97aaff602ad646c5b53896ae32379776d7b760082ef6baa70f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
