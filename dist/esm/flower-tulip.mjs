export const name="flower-tulip";
export const id="dl_a1c7bae40b6c484cb9cc";
export const url=new URL("../icons/flower-tulip.svg?v=fe1738fa904d35ee2850ffb5d67b55e9eb273d0c1bd058d586628eb63ae4e6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
