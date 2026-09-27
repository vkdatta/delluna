export const name="repeat-fill";
export const id="dl_35394de6397d4187b156";
export const url=new URL("../icons/repeat-fill.svg?v=13b53b445b2fe2202397dae90294655c895062865e84a5a62bd83ed09b8bfedf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
