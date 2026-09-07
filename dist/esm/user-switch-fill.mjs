export const name="user-switch-fill";
export const id="dl_f1dd266311044d3aab0c";
export const url=new URL("../icons/U/user-switch-fill.svg?v=24bd5489486cf84d4f90fbedb306fee7321f8c30a51d5db4dd9568021877dc32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
