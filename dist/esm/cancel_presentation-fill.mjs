export const name="cancel_presentation-fill";
export const id="dl_643be32de5406d7c6e0b";
export const url=new URL("../icons/cancel_presentation-fill.svg?v=9c1ef22942e2b9d977d80f49bd04f7b07c67a3577417044ae449d360928b1f7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
