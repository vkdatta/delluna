export const name="pencil";
export const id="dl_e6327289cb864926a87c";
export const url=new URL("../icons/vkdico/pencil.svg?v=07efbedcf90fe3f6686c94677790739e80817c7b4d6d9087b23349155b1f69aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
