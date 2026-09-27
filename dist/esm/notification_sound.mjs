export const name="notification_sound";
export const id="dl_50c94e7b076f19ebc449";
export const url=new URL("../icons/notification_sound.svg?v=4484aba4ae1e3ec449c8fcf90dd0089c1c023b95d8c036ac4c974a2cc3383e1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
