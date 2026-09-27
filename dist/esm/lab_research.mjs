export const name="lab_research";
export const id="dl_71298ced479988ab2a05";
export const url=new URL("../icons/lab_research.svg?v=53e007313a6ed38c5c74641aa8cd5bf61cb3c26eef36a5057cb34840f107058f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
