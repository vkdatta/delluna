export const name="toilet-thin";
export const id="dl_a2e27163e8c44fa8dade";
export const url=new URL("../icons/toilet-thin.svg?v=484e73e990ef8d408350f860647bde7fca099956371884c1b8dcc14996381934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
