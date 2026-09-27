export const name="edit_notifications";
export const id="dl_1668700cd80e2bec55f9";
export const url=new URL("../icons/edit_notifications.svg?v=b2492714c26d00ae3e14ff5938a0371c85f59680b90c913044a0f0452f42836d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
