export const name="laptop";
export const id="dl_33818e21249a48a09782";
export const url=new URL("../icons/laptop.svg?v=761f9e8d8a9db3e28adf8a6287016a47302f8fb629dfa355372d3835681b506f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
