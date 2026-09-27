export const name="boules-thin";
export const id="dl_c71c5dab83bf44139de1";
export const url=new URL("../icons/boules-thin.svg?v=f2617e6c32b4ff16a799dea4d81c5335747440a1376fe645d32d00627c349387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
