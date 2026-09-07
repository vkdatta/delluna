export const name="lucid_3-pocket-knife";
export const id="dl_aa4226e5a23241249c2a";
export const url=new URL("../icons/lucid_3-pocket-knife.svg?v=5f690d23027fb096e930e03dfe81bd16858546a37f3049302bc7fd5f556f9dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
