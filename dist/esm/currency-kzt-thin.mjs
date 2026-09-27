export const name="currency-kzt-thin";
export const id="dl_b8c77104dd4d4e7b823f";
export const url=new URL("../icons/currency-kzt-thin.svg?v=1ff9275dd57dac500f181a1f820084aecdb29712eba97c16a3da44c79eb96a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
