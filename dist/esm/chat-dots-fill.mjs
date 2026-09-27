export const name="chat-dots-fill";
export const id="dl_13c097829bc445578327";
export const url=new URL("../icons/chat-dots-fill.svg?v=0eefab1ee0d259769596c82fdd0c122822a3a5a7d81967ba00d1ecfbb3349ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
