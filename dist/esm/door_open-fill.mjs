export const name="door_open-fill";
export const id="dl_4910f141a56b421094c4";
export const url=new URL("../icons/door_open-fill.svg?v=09c7a068fadeeb61d417dbcbdc8d9fafdcb28c338c6529e7dceda7e3f0dcbad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
