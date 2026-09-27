export const name="eye-slash";
export const id="dl_1e40fa0e6eb3458ca58f";
export const url=new URL("../icons/eye-slash.svg?v=6f5b997fb68cd3b8cd9793dc065ae91ef999bb203a09274c53b3f0bb534c0d9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
