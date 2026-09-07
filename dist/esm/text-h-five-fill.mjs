export const name="text-h-five-fill";
export const id="dl_1b8b997e29734aaeb46c";
export const url=new URL("../icons/T/text-h-five-fill.svg?v=4565ac79c662b02b26b3d1c811d878b3474c98cc3e3d37cd224380e07d5ac9ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
