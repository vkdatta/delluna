export const name="currency-eth";
export const id="dl_1917cb72ccd643038956";
export const url=new URL("../icons/currency-eth.svg?v=2619f1523a8ba6974f529b2ab6c2a89c26f0eb5a7c7e1412997f05e9797bcd82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
