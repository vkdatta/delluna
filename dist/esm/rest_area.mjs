export const name="rest_area";
export const id="dl_01533acfe4ab5c775fd6";
export const url=new URL("../icons/rest_area.svg?v=75a85127cdee1a6346823c16f42519e8ad3fd5b7e045310eba77cf4b4ce02597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
