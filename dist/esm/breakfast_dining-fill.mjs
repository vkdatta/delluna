export const name="breakfast_dining-fill";
export const id="dl_6eff2958db1c16e904f6";
export const url=new URL("../icons/breakfast_dining-fill.svg?v=1890b28e4884c8978aec5fa0ec56bbb4acbd74cc351fff9b60449ad08d94f59d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
