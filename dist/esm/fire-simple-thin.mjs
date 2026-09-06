export const name="fire-simple-thin";
export const id="dl_fc61fef8993c4c0facc7";
export const url=new URL("../icons/fire-simple-thin.svg?v=9f188835376ef9eb276fcb9be10e9f8a5d535e186036de91c831125882ec79c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
