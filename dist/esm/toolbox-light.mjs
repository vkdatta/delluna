export const name="toolbox-light";
export const id="dl_62a8fb918bc981d5e407";
export const url=new URL("../icons/toolbox-light.svg?v=73509e5fc71d5e272861fc51913b15ab0ad4881e5bea0af9653e145d11b412ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
