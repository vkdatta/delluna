export const name="contract_delete-fill";
export const id="dl_b8b93fc478ec0e79bf9b";
export const url=new URL("../icons/contract_delete-fill.svg?v=e90535320159d382c02fc271888c3ee27a5e98047d7cad00fc4f019e2ecf8714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
