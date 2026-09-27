export const name="lucid_1-aperture";
export const id="dl_a76b97a9793142638a55";
export const url=new URL("../icons/lucid_1-aperture.svg?v=e50d93dcc073fa9b640957e8a88400746a0fde94eec725500b77a98bc7b62d95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
