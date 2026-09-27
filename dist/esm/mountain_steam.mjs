export const name="mountain_steam";
export const id="dl_48f1664d35911ed84d42";
export const url=new URL("../icons/mountain_steam.svg?v=ba6b9f4aa873ca319652c06870821b78a15fb7ade41f6a64096947c2a79c1638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
