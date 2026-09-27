export const name="lucid_2-mail-open";
export const id="dl_251920c22c4b411994b6";
export const url=new URL("../icons/lucid_2-mail-open.svg?v=67d7d2ac170da09bd8f820d8ad235dffeaca9658dc3135560b0b4e1d4b040693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
