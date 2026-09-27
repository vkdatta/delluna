export const name="grain-fill";
export const id="dl_bc73244dc80bb5bd222d";
export const url=new URL("../icons/grain-fill.svg?v=bec6106f86f1a2b6b542cbb5b61847aef880eec4ae9b61ae8287226d650f52ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
