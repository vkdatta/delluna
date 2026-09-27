export const name="lucid_2-file-pen-line";
export const id="dl_39ad5fa48be34fb29639";
export const url=new URL("../icons/lucid_2-file-pen-line.svg?v=ab61a17424831ee5ef9630aaecf67f4da7a4320da354857c6e03dc79ebef9618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
