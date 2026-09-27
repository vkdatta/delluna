export const name="no_luggage";
export const id="dl_f5d6a06b9a2146843e08";
export const url=new URL("../icons/no_luggage.svg?v=08ac5410964be433d3cd863202cfb6187f8c541de6a9e8c8137368af8e2998af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
