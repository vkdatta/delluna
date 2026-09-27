export const name="propane_tank";
export const id="dl_39f675fa74ff6f71a10a";
export const url=new URL("../icons/propane_tank.svg?v=b778807aaa34c756327aeedfd7b367abf3ce00d76581a4abc6950decc4ea2cd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
