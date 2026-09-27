export const name="barbell-bold";
export const id="dl_fa8454f9a2a4424989d3";
export const url=new URL("../icons/barbell-bold.svg?v=192f7e3af1295a458f5a55f4492d118209ee253dc042d054d49ffb456d143745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
