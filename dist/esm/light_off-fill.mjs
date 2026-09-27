export const name="light_off-fill";
export const id="dl_d57bdae4c5e1d557b315";
export const url=new URL("../icons/light_off-fill.svg?v=51288236647859880ed1b69c24f932e5f1b0c7a75010dd9b225afc5e966aff01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
