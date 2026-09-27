export const name="broom-thin";
export const id="dl_4a5ef5f7be3144f9992b";
export const url=new URL("../icons/broom-thin.svg?v=b8d2dc4af7e8adab8be33cc7d0fc4b723fdab3ff61f64a0bd2718e83b51ad4e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
