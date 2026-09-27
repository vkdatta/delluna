export const name="hourglass-simple-low-duotone";
export const id="dl_30a831ba84fb4da09ecc";
export const url=new URL("../icons/hourglass-simple-low-duotone.svg?v=b9193f4ee01c5a30cb81e97c7dd8a51ea54e7e7b577e3a49ae688d3eccacb82a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
