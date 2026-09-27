export const name="nested_function";
export const id="dl_1a42c857f33b4b59ba87";
export const url=new URL("../icons/nested_function.svg?v=0fc07aaafccf2c6b916523df8ccf77762619f08a8d845ecd9f42ee7527a6a93f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
