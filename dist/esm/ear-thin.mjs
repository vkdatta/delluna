export const name="ear-thin";
export const id="dl_59d4ab23fa6a445383ff";
export const url=new URL("../icons/ear-thin.svg?v=efac9baebdaf0b06854b599925c383f5bdaa4504967802214fdbf03528f2fca2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
