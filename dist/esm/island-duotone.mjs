export const name="island-duotone";
export const id="dl_8e6c9a5b53e84d368a44";
export const url=new URL("../icons/island-duotone.svg?v=584eb7285d0f7d217e585fcb3e66be5a19d1c59f4d277dd4016c31ca39b2071e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
