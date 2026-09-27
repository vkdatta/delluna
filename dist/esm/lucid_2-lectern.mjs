export const name="lucid_2-lectern";
export const id="dl_7fc2b5b79c0140919812";
export const url=new URL("../icons/lucid_2-lectern.svg?v=0386934cd9918d0396ced29e9484622c616dd8ad3ff81f2f3c90019b974bf954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
