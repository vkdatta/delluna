export const name="media_output";
export const id="dl_610405b8f59977e17b66";
export const url=new URL("../icons/media_output.svg?v=ae3ed6bb371b1c719cdd083293de5a2183a9ed4cb13e570e9abb0b76d823dd1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
