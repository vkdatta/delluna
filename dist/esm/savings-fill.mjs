export const name="savings-fill";
export const id="dl_1ba31bbca1bfcf37f474";
export const url=new URL("../icons/savings-fill.svg?v=961593a1c16cb6094b659224112fe22510fa25ce303bbaf75a0b39ab0c0da239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
