export const name="arrow-down-right-fill";
export const id="dl_14038537068d4c4fb6dc";
export const url=new URL("../icons/arrow-down-right-fill.svg?v=669f5020cafdc4e0e99d002656ddd4897fb39b2ddb1838a130dae982604a7f0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
