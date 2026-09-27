export const name="number-circle-five-light";
export const id="dl_10248b181a8d46fe833d";
export const url=new URL("../icons/number-circle-five-light.svg?v=530b175ff120dea6eeebe66e6fdd948314312a2f2593b526baa37611525c7aa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
