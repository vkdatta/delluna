export const name="icecream";
export const id="dl_102bb66caee56d525f01";
export const url=new URL("../icons/icecream.svg?v=4d1f28488c7d8144676c8efc5b21f6fa166724ab0c44f335a6f3d504cc941f34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
