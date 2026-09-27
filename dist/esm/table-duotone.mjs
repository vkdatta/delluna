export const name="table-duotone";
export const id="dl_4f698e3c788101afe8f9";
export const url=new URL("../icons/table-duotone.svg?v=9d5d194de48b3983c3e666fe8e1089cad925adbde10477f0908066f38b919c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
