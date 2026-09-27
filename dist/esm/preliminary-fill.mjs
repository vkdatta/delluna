export const name="preliminary-fill";
export const id="dl_340b6659b42a73484bd5";
export const url=new URL("../icons/preliminary-fill.svg?v=454abede80c4b852bee712572d72952bd0fea9b1858ca6d850b9e6242d6568fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
