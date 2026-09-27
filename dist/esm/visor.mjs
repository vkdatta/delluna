export const name="visor";
export const id="dl_23a48918d06fdfc572cc";
export const url=new URL("../icons/visor.svg?v=0c53dbd896ebbc2a13c3e883b6ef199a4e48cbb78025f4f638cc176bca53a272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
