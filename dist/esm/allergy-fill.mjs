export const name="allergy-fill";
export const id="dl_1a65a3ebe5e420914ff7";
export const url=new URL("../icons/allergy-fill.svg?v=591dba7d310371ad95a08ab64fd0208fff9def10a007412816c81edac72fd88f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
