export const name="laundry";
export const id="dl_265fd66e60d09acec45d";
export const url=new URL("../icons/laundry.svg?v=4634009d60254c66992e7179f8bd089ace444bc67bf11757181b0486c94fac84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
