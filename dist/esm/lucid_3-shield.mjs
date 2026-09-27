export const name="lucid_3-shield";
export const id="dl_2f8fcb2a7f71476db6e7";
export const url=new URL("../icons/lucid_3-shield.svg?v=5076cfc78f6ed5ece68032e6b1a994b3a909ecbea0c854542a30b3ad62bb433a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
