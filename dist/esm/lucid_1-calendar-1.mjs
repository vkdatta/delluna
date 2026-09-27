export const name="lucid_1-calendar-1";
export const id="dl_9efa12189ca64c24b6f8";
export const url=new URL("../icons/lucid_1-calendar-1.svg?v=0bc656798f888ef616b2504e3ed2b68967edab1e763fbd3eea71c6ff4d52ef76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
