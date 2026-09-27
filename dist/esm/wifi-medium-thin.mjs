export const name="wifi-medium-thin";
export const id="dl_e9fe94de3c90d28e054e";
export const url=new URL("../icons/wifi-medium-thin.svg?v=d87e68e63b4f816a998c995bdd3f115534c7a11aeb6f12a0f74d9098ca880a5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
