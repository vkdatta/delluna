export const name="ear";
export const id="dl_380f47db21ec46ba8f56";
export const url=new URL("../icons/ear.svg?v=812f168f32f8d59c562297f15e24513324fc9b81cb45a32ec0bc8459d05a95df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
