export const name="contact_support-fill";
export const id="dl_cd72105dceaa44732c59";
export const url=new URL("../icons/contact_support-fill.svg?v=46c575135e4fca8eb3c625936638b14aaaf774129023d39f0acbc56e57448d9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
