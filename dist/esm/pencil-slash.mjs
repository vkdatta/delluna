export const name="pencil-slash";
export const id="dl_fb8eefb8dba2458e8e0e";
export const url=new URL("../icons/pencil-slash.svg?v=a4b755a1e16d08406cf006f03df67c7a0a81e5557591d701450313d5b9ee83a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
