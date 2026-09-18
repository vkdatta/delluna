export const name="calendar_meal_2";
export const id="dl_ff5605f14e71492fa648";
export const url=new URL("../icons/calendar_meal_2.svg?v=98ae1301452c9d18e4dd87a104854914bfe6e36fcdc3dc7fe3f05af6e79c64b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
