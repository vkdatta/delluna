export const name="lucid_2-heading-3";
export const id="dl_654d7e8901664e18ac68";
export const url=new URL("../icons/lucid_2-heading-3.svg?v=028def0709e4d48f328da4fcc8827874f5160d0d56892b248803e1cd4f8aee05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
