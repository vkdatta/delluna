export const name="function_box";
export const id="dl_71cdbdbbb1bf47aba224";
export const url=new URL("../icons/function_box.svg?v=c705c5d65ff345d749db93b139c5bd1f9655e953c8a3a602717afbcdffb9a7d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
