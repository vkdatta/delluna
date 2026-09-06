export const name="lucid_1-circuit-board";
export const id="dl_4b15e598f43f4bbc9d46";
export const url=new URL("../icons/lucid_1-circuit-board.svg?v=d47306885c97658240c03c6cbac1b31c5c26adfeba1ec0666fa0b7ca599f1dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
