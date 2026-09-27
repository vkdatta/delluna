export const name="road-horizon-light";
export const id="dl_65a4cc92bf9d48a5a79b";
export const url=new URL("../icons/road-horizon-light.svg?v=97afd449ccde9fde6267a4bf7f40d508dc7f2db3022c5a2a8db134c1613888c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
