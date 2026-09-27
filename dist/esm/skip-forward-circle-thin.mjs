export const name="skip-forward-circle-thin";
export const id="dl_02f9a82f645b254497a5";
export const url=new URL("../icons/skip-forward-circle-thin.svg?v=4ab1232e78a9d149b462b178d8153df1d8bb37ad5d04126343b7cc43695125f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
