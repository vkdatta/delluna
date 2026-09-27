export const name="format_h6-fill";
export const id="dl_0d7560412a2c439fc290";
export const url=new URL("../icons/format_h6-fill.svg?v=ea1f82044a97976f4c729fea47a3e9c2290562902142bbae7a80a26d45453d1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
