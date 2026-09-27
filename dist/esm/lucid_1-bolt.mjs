export const name="lucid_1-bolt";
export const id="dl_f15639b084e5436eb078";
export const url=new URL("../icons/lucid_1-bolt.svg?v=750aba21788f9db83a98d1989b9e171f7e8f60306662134ecd3821dc24ab621e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
