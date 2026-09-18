export const name="notification_sound";
export const id="dl_470db878890546c1aa2d";
export const url=new URL("../icons/notification_sound.svg?v=6e257807105c2a73e2e37a97e1744c4d26c39d04ef8b1e6b241bcfc9c5bd12e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
