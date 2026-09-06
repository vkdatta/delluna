export const name="chat-circle-fill";
export const id="dl_aca85f8cac2440b0bf0a";
export const url=new URL("../icons/chat-circle-fill.svg?v=ea4d05ca384dde5c67fb5b15b36e1c6734400147b41471b13665fac87520506b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
