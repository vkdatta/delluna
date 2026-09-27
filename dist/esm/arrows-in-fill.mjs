export const name="arrows-in-fill";
export const id="dl_2310e4faddc14d2aa661";
export const url=new URL("../icons/arrows-in-fill.svg?v=0045a9ff541c42dc33b31771babbd162cc6b9c1b491a20d422dd0739db8d6241",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
