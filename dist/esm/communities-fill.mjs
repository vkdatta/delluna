export const name="communities-fill";
export const id="dl_4eb9816fe80691863fdf";
export const url=new URL("../icons/communities-fill.svg?v=3231828fa7a68aa6b7eb1c486459235dd85408baf58e712a2c79dfb958cbf408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
