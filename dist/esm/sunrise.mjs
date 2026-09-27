export const name="sunrise";
export const id="dl_b84688133b6c40e39dda";
export const url=new URL("../icons/sunrise.svg?v=e63fcb8f5944721c16c4e4dafe832667503e4699c11944b675a5b3b936a9ab26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
