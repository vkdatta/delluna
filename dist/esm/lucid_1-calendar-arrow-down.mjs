export const name="lucid_1-calendar-arrow-down";
export const id="dl_77e8d298e4334c8fb5c4";
export const url=new URL("../icons/lucid_1-calendar-arrow-down.svg?v=3d2c5baefd07b407be3bf5d123b35e385b5bdaa4266b0e673284afc3a56a6977",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
