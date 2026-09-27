export const name="vector-two-duotone";
export const id="dl_66777d83a80c8fc07728";
export const url=new URL("../icons/vector-two-duotone.svg?v=cb2eef589cbfc6df923bcea73a8c01cca59b151e35c7aae2a5d265551bbadc2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
