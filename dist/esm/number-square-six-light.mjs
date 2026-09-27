export const name="number-square-six-light";
export const id="dl_b247cad2971e44a6aeca";
export const url=new URL("../icons/number-square-six-light.svg?v=79c30717b935d39e8bdfc874611ea6c2c3459da5ca42a15ecb49a694fb250259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
