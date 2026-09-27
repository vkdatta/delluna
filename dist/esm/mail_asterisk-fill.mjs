export const name="mail_asterisk-fill";
export const id="dl_9ba90928218f53874429";
export const url=new URL("../icons/mail_asterisk-fill.svg?v=0ab5985e5806eb63649db4fe0b8f6c69f15f2d257ed4da61865e9bc65cdc6731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
