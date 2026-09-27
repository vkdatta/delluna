export const name="save_as-fill";
export const id="dl_e43e318726abbebcd92b";
export const url=new URL("../icons/save_as-fill.svg?v=dd53d702d555422edab8bf097998cb8378701811661d835b1d4e1791276e4046",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
