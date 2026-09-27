export const name="arrow-bend-up-left-thin";
export const id="dl_44a183f7c44b4121b24c";
export const url=new URL("../icons/arrow-bend-up-left-thin.svg?v=18c19901bb68ec45d6f4dc4cf8e444ef4381f9129e652866914dacf28ea5b4a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
