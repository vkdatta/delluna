export const name="immunology-fill";
export const id="dl_0fd6f09981a2204b55ca";
export const url=new URL("../icons/immunology-fill.svg?v=a393fae4faef9d839c9d6414ff65382aca512e252049b74a5ef7cb6051a7f64b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
