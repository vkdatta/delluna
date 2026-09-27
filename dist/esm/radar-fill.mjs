export const name="radar-fill";
export const id="dl_10b0af44792a777d0b99";
export const url=new URL("../icons/radar-fill.svg?v=880ab32321adcb1aced1a249bce32ad27316971973dd8477265d17c395e83cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
