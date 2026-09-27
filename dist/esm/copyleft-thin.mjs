export const name="copyleft-thin";
export const id="dl_4923619b744a45ec9967";
export const url=new URL("../icons/copyleft-thin.svg?v=895fb996da39b4610fca82c9c53af4c857fb3cba7b9d4234a41a89c6a0973c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
