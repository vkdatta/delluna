export const name="keyboard_external_input";
export const id="dl_33efe3b0a1054663be3c";
export const url=new URL("../icons/keyboard_external_input.svg?v=e0d4bff449c1885681759a92f879bcaba7e677693e86a08212e46e093596a584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
