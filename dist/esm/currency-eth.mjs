export const name="currency-eth";
export const id="dl_1917cb72ccd643038956";
export const url=new URL("../icons/currency-eth.svg?v=ffcabfd671b4a053fe361f4ee2238ba10af43c356a418d50a24bb5ecaba9695e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
