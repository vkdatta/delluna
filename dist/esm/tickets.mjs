export const name="tickets";
export const id="dl_e68a7f284eab4b0ca2db";
export const url=new URL("../icons/tickets.svg?v=c02447230f2a8ccd529d7451fbe9dd4c83335231cc00ac9638e24acdb313aa70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
