export const name="fluid_balance-fill";
export const id="dl_181d4ab537b36868ef78";
export const url=new URL("../icons/fluid_balance-fill.svg?v=73fd8265e9dfb9d659d6dabb0a3577abe9562dd3e5b10a836bcc9dbbc9bcf41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
