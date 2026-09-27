export const name="lucid_2-globe-off";
export const id="dl_5c54e6568ea8446e8193";
export const url=new URL("../icons/lucid_2-globe-off.svg?v=105dfc9799d1a6d5b9d290690139629854547879e7535334dd5c6fe57688ab7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
