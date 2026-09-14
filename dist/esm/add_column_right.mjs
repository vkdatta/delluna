export const name="add_column_right";
export const id="dl_4f38862ca91c4967a15f";
export const url=new URL("../icons/A/add_column_right.svg?v=158427593f9a9c795c228c7af3e12eee01cff21b76945e9b856f56d58fd4bd93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
