export const name="variables";
export const id="dl_61089a7bc91179b781c7";
export const url=new URL("../icons/variables.svg?v=b3b777cafb5c8f4e18e75f1194d9f2b85301e9de90e64cebd2e4de0b999a399d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
