export const name="lucid_3-rectangle-goggles";
export const id="dl_5ff7e55634614577a66d";
export const url=new URL("../icons/lucid_3-rectangle-goggles.svg?v=d8eeda026d6d3e59debd2b91c92427752177955d7d34192746b498e8f30fbe68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
