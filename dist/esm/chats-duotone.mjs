export const name="chats-duotone";
export const id="dl_0bfcfb9770e2483e87f4";
export const url=new URL("../icons/chats-duotone.svg?v=ce72c95caba63920efa6dc9945b6706fdfbb2976df31eb686d94a7696fcbe832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
