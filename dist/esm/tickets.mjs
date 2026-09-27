export const name="tickets";
export const id="dl_e68a7f284eab4b0ca2db";
export const url=new URL("../icons/tickets.svg?v=73545bff00bfff53201ce96121c52aa91e4b10f2c398be5d8c0694c8a3614a4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
