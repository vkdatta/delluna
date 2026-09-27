export const name="lucid_2-hammer";
export const id="dl_7e261ef9e1ab460da694";
export const url=new URL("../icons/lucid_2-hammer.svg?v=11a3c108ec1c9ba3574d6dbf9afd63091f3758e8fc02b593506d2f020df7cebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
