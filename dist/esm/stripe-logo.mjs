export const name="stripe-logo";
export const id="dl_14897fe7e61e75b280ae";
export const url=new URL("../icons/stripe-logo.svg?v=3174a3afc42774fcdf48772db1b86cd372351afd8ded49722972b66ce8296383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
