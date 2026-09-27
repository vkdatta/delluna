export const name="my_location";
export const id="dl_8ed540bdac0a59b56c30";
export const url=new URL("../icons/my_location.svg?v=1fb78b81f9aa4eb6b88541a21aa58b386e267ef49176758770f13bbd8b740669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
