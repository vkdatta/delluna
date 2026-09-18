export const name="contract_edit-fill";
export const id="dl_7080fee9cb9241909a25";
export const url=new URL("../icons/contract_edit-fill.svg?v=2c43eef6c33e790944fb57d4ead7d12ebcf813a34eac9ef69c094b776e0b1a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
