export const name="edit_notifications";
export const id="dl_9299c7a9acfa44b6afd8";
export const url=new URL("../icons/E/edit_notifications.svg?v=ac370adcc1a835aa18d38829a42fa33d8640e4d697eaf27470155574adb68a42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
