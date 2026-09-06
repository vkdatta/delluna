export const name="lucid_2-file-minus-corner";
export const id="dl_630c8f7417484459b47e";
export const url=new URL("../icons/lucid_2-file-minus-corner.svg?v=f0fb96c73b705dfcc42948fd18dc70da7d120a65c599cc6e641faf9cbc6e9568",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
