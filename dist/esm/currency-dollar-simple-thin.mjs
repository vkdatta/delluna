export const name="currency-dollar-simple-thin";
export const id="dl_28276d2b827841df85e7";
export const url=new URL("../icons/currency-dollar-simple-thin.svg?v=6f924070f52b2a7532a73cfe65a51d9e2ce8bf98f3fb25e63d15020134951dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
