export const name="cylinder-light";
export const id="dl_cedef46ec7ea479fb09e";
export const url=new URL("../icons/cylinder-light.svg?v=3d604c5b2f63176c8bbf339c36106ca3b747a29f51a98a1053a448449687eba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
