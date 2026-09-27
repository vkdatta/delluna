export const name="cylinder";
export const id="dl_b96b90bc90584f22ad4b";
export const url=new URL("../icons/cylinder.svg?v=dedd2922d515d9c6edb7404562e3410d4aadbb0107eaab1bd84fe6c4bdbe2a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
