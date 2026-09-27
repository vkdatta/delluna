export const name="lucid_1-bed";
export const id="dl_f336cc0b84144c529b3e";
export const url=new URL("../icons/lucid_1-bed.svg?v=41b1fd198c438fc2c55ac2a3c2a19206314f6f4e5bd14ad9b8c0429aa02bd039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
