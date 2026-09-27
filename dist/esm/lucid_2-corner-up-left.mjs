export const name="lucid_2-corner-up-left";
export const id="dl_7f8b48209cd9467b9b78";
export const url=new URL("../icons/lucid_2-corner-up-left.svg?v=1b44cdb0c67f2454aec73d4e06a6d4e84a38daa9a0d1be57597979b92bf62c56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
