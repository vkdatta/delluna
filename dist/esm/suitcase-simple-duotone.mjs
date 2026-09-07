export const name="suitcase-simple-duotone";
export const id="dl_124b5b47ef604eba846f";
export const url=new URL("../icons/S/suitcase-simple-duotone.svg?v=dc39b3665de4ef55beac99bf01881fb15c2a4acf802b7732ad796def8e54e7df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
