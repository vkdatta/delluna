export const name="flag_circle-fill";
export const id="dl_afba91e359454275f6a5";
export const url=new URL("../icons/flag_circle-fill.svg?v=c7dc3a663e1340b2cde05103fc40e57f7982051c96618ab37c4f8a2169cd9b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
