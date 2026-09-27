export const name="pickleball-fill";
export const id="dl_4a4c42e64512f5c5283a";
export const url=new URL("../icons/pickleball-fill.svg?v=7c009b2c3432bae4ed089e7c85a6d2db1d593a5bb6e9e97ec596dc9fe05bbad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
