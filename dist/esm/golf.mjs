export const name="golf";
export const id="dl_c913571b864a4d33be51";
export const url=new URL("../icons/golf.svg?v=390df0f6d086c4d14b5ba9c1471bf0cf6384f96a947f1d458501263d1515a6a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
