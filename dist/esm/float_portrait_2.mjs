export const name="float_portrait_2";
export const id="dl_a7b11ec776fe719965d1";
export const url=new URL("../icons/float_portrait_2.svg?v=b7cbe0d8aacfa0833adcfcffbf79f2fe3208db5700bffa808391e911fe476848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
