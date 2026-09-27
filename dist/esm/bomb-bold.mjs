export const name="bomb-bold";
export const id="dl_761fa84b40384fd0b403";
export const url=new URL("../icons/bomb-bold.svg?v=057b6b91790b1a4940ac9780d031a7b63cad5b087d854181230b24cb9ca936fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
