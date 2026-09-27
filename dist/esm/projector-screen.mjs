export const name="projector-screen";
export const id="dl_1d879513a22541ffad44";
export const url=new URL("../icons/projector-screen.svg?v=32f531e3de973a837649b247607998b61362a4a7898e6214d461d1e420bed5e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
