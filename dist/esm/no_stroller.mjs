export const name="no_stroller";
export const id="dl_aeebd77659b23fc95747";
export const url=new URL("../icons/no_stroller.svg?v=9d0c46fc57a6509bb98c6d5cfb5a38a759c66cde2ab7cf59d57528763b632002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
