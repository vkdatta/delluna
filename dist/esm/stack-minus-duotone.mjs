export const name="stack-minus-duotone";
export const id="dl_4a30d7a768941337253f";
export const url=new URL("../icons/stack-minus-duotone.svg?v=fdc36665490cd770c7b164e56d695de1736e713899973a9f2aaed18158a278b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
