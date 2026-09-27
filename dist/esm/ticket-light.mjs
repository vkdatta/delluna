export const name="ticket-light";
export const id="dl_38e43881523099427b42";
export const url=new URL("../icons/ticket-light.svg?v=9b90233fff1fdaf8c9728cb172651df341e99c10c561c0f328524ed795ca3cbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
