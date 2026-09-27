export const name="lucid_3-search-check";
export const id="dl_9c821b2da72d40a4b00f";
export const url=new URL("../icons/lucid_3-search-check.svg?v=8b9b145a46e967a3b74822b6f07f9f182976bf7981b0cf55f9282c6fdafa72e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
