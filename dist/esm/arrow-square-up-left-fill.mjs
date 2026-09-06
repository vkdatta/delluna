export const name="arrow-square-up-left-fill";
export const id="dl_bce753a4701b44368760";
export const url=new URL("../icons/arrow-square-up-left-fill.svg?v=93abd6f9066b3fede1ef04279a39f77a9ab5c1c28296a4ee39b1c90f1810d416",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
