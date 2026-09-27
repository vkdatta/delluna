export const name="leak_remove-fill";
export const id="dl_29b854ddd25e97876e9a";
export const url=new URL("../icons/leak_remove-fill.svg?v=1f1355c5dafdf20844e740641b85be944697e679eec19c72cf2fad7b17eb159f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
