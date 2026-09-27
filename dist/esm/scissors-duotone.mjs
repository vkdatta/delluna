export const name="scissors-duotone";
export const id="dl_cb631b06f830551f918b";
export const url=new URL("../icons/scissors-duotone.svg?v=76cfbea79597fa205c6a25e96c3eba1755cbee954b2d399a90e043b5b51b0b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
