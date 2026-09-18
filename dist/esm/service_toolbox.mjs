export const name="service_toolbox";
export const id="dl_93e53152ae66445e82a6";
export const url=new URL("../icons/S/service_toolbox.svg?v=1d4e51be59a677ae3982e5d89e3b4cf09e4aa2238755971bcec9ef6d32a3450b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
