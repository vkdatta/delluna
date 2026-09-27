export const name="hurricane-thin";
export const id="dl_ec988d5b6f72463ebfb0";
export const url=new URL("../icons/hurricane-thin.svg?v=7518af68049bb5ec198bee9ac58f27b14034d668d686937dda013c77dac27006",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
