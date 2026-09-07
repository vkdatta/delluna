export const name="lucid_3-radical";
export const id="dl_77bdb454d04a4939a122";
export const url=new URL("../icons/lucid_3-radical.svg?v=760393bb40642767ac01101ad5d27df32e8ca8219a3c44abdabaa0db4a981f3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
