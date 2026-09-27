export const name="lucid_2-dna";
export const id="dl_e2b8c97431a448f8b07e";
export const url=new URL("../icons/lucid_2-dna.svg?v=2557d4a5b5a5a36f15fb18e9891fbea32507bf07fed43a8e4d7d46d4f74e5947",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
