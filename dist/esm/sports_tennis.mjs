export const name="sports_tennis";
export const id="dl_9fac7ed401de3dc6ab9e";
export const url=new URL("../icons/sports_tennis.svg?v=87b2a133a8b4af3efd63034b8c7c0cf27dd99f238bd104558e3f7b756986a26a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
