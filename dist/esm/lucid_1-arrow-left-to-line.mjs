export const name="lucid_1-arrow-left-to-line";
export const id="dl_bd3995c1cefc4046a7de";
export const url=new URL("../icons/lucid_1-arrow-left-to-line.svg?v=aaa0fb2543d2cbed25b7921ca541d91bf543fc6e8939c69fab6d7a5d15d76776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
