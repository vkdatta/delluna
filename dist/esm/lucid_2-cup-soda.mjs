export const name="lucid_2-cup-soda";
export const id="dl_94f606495a0c448e9430";
export const url=new URL("../icons/lucid_2-cup-soda.svg?v=6bc06256a0b3a84dbbd4b764f011c4add9d7be11810180d62b37d63d892bb5aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
