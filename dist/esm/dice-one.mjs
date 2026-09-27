export const name="dice-one";
export const id="dl_0e4ca1612bb5457fb956";
export const url=new URL("../icons/dice-one.svg?v=03b471926e0897e70836aca3cfc0f868873e1098dbf1b781d606bcfbbc21c872",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
