export const name="visor-duotone";
export const id="dl_2cbcb4a3975efd5916f1";
export const url=new URL("../icons/visor-duotone.svg?v=c2a875c1b0d1e3a5cd388a7ce698fd6cc19e6b10019cf6c340c5a53b3b0cf93b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
