export const name="lucid_3-panels-left-bottom";
export const id="dl_3f95510e33724d44a1c9";
export const url=new URL("../icons/lucid_3-panels-left-bottom.svg?v=16eae04ab4433b5f2e63d9cad2c802e285e2e7299b6ce315e4ad03a83e2e7ff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
