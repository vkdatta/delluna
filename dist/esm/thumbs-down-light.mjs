export const name="thumbs-down-light";
export const id="dl_ff5c7dbc21744138ae6d";
export const url=new URL("../icons/T/thumbs-down-light.svg?v=7a0b1826548c527615c4d0e939705eef7251f3cd32cfa28bbd987cba37461747",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
