export const name="lucid_3-sport-shoe";
export const id="dl_fa084c329ea14673baa4";
export const url=new URL("../icons/lucid_3-sport-shoe.svg?v=5c2d4b7c65d7c3aafeeb6404d36e646128c5a3428f1a80c434e11a568d1931fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
