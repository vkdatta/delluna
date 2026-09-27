export const name="ward";
export const id="dl_9b67aa1e958a0d3587cd";
export const url=new URL("../icons/ward.svg?v=a8599d32aa0a1159cd7f6f11941e96253904ca04b0465da0390fd47040ad4b9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
