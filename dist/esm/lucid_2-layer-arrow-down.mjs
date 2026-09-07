export const name="lucid_2-layer-arrow-down";
export const id="dl_282f37409e9b4834bb26";
export const url=new URL("../icons/lucid_2-layer-arrow-down.svg?v=d3a26dfb5b61a540b93005b06c438075e04e7eb747bfc21a6e8fcc2ec33b536a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
