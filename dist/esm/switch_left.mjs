export const name="switch_left";
export const id="dl_bf46351269f2791f8153";
export const url=new URL("../icons/switch_left.svg?v=a5bcd64116c794defb7e14f7485278d320e4d2f9b6e2878f8d871e0f4be0219b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
