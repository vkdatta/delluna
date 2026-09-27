export const name="lucid_3-radiation";
export const id="dl_e9b4c4a0e61348eea44b";
export const url=new URL("../icons/lucid_3-radiation.svg?v=a55d4dfd2e6cc2a2dd95ae12d1242a16426ffc09d83adf076bcf6dee20398ea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
