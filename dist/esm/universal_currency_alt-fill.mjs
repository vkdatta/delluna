export const name="universal_currency_alt-fill";
export const id="dl_89fc5066e9923b4a0591";
export const url=new URL("../icons/universal_currency_alt-fill.svg?v=05da84864740410546edd8968da7e68a3a6728b08f4554ae1766864db4b659a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
