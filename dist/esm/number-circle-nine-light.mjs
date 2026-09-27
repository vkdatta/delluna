export const name="number-circle-nine-light";
export const id="dl_e7c5d636e5be4ead9b25";
export const url=new URL("../icons/number-circle-nine-light.svg?v=45b940dfb2922da92bcc1c17a8b93fec34c09c90e05fefaf29187aaccc00b502",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
