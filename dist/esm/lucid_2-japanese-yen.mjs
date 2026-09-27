export const name="lucid_2-japanese-yen";
export const id="dl_2ebe0219c0ca49649c0c";
export const url=new URL("../icons/lucid_2-japanese-yen.svg?v=179499861004b984d73b9dbf0a2811384495a5993d3b182bb84077a479389a84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
