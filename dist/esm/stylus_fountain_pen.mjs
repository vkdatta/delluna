export const name="stylus_fountain_pen";
export const id="dl_8867d3d42dc34faa80ae";
export const url=new URL("../icons/stylus_fountain_pen.svg?v=c409b075b8a23b145593b511bd706d5841e7078f4093a2bbcd3a911b1fd29bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
