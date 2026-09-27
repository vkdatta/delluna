export const name="lucid_3-sparkle";
export const id="dl_bfea95450f1d4ceeb158";
export const url=new URL("../icons/lucid_3-sparkle.svg?v=80225c75116e7b35d89a5d60872da876aa7204315b9894c7f4de70199f7b716a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
