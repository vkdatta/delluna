export const name="subscript";
export const id="dl_4ab46ed235a04c7ea3b1";
export const url=new URL("../icons/subscript.svg?v=78b03a8a5819229dc0efbf1f55c65cb53dcc68ae499ae92a8e70790e3b66a540",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
