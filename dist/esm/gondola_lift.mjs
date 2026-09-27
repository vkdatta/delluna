export const name="gondola_lift";
export const id="dl_5ee4e3a85fab3799c850";
export const url=new URL("../icons/gondola_lift.svg?v=2768d0f0c096afa0a597b196d19319528c2d1c4db045ffb9083c0507dbdc6b4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
