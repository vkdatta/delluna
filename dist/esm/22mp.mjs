export const name="22mp";
export const id="dl_cd8c486f8cacecb7e322";
export const url=new URL("../icons/22mp.svg?v=54e932a51ca298b492d155a874d5ce12ebe838811988f70760dd8fb484209bea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
